# Admin User Setup Guide

## Creating Your First Administrator

Since you're experiencing issues with registration and password reset, here are several ways to create your first admin user:

### Method 1: URL Parameter (Quick & Easy)
1. Open your website
2. Add `?init=admin` to the URL
3. Example: `https://your-website.vercel.app/?init=admin`
4. This will automatically create and login as admin

**Default Admin Credentials:**
- Email: `admin@academiajudo.com`
- Password: `AdminJudo2024!`

### Method 2: JavaScript Console (For Testing)
1. Open your website
2. Press F12 to open Developer Console
3. Paste this code and press Enter:
```javascript
// Create admin user
localStorage.setItem('judo_user', JSON.stringify({
    id: 'admin_' + Date.now(),
    email: 'admin@academiajudo.com',
    user_metadata: {
        full_name: 'Administrador Principal',
        role: 'admin'
    }
}));

// Reload page
window.location.reload();
```

### Method 3: Direct Database Insert (For Development)
1. Go to your Supabase SQL Editor
2. Run this query to create an admin user:

```sql
-- Create admin user directly in database
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    confirmation_sent_at,
    created_at,
    updated_at
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@academiajudo.com',
    crypt('AdminJudo2024!', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    NOW()
);

-- Create corresponding profile
INSERT INTO public.profiles (
    id,
    email,
    full_name,
    role,
    belt_level,
    is_active,
    created_at,
    updated_at
) VALUES (
    (SELECT id FROM auth.users WHERE email = 'admin@academiajudo.com'),
    'admin@academiajudo.com',
    'Administrador Principal',
    'admin',
    'black',
    true,
    NOW(),
    NOW()
);
```

## Troubleshooting Registration Issues

### Check Supabase Configuration
1. **Authentication Settings**:
   - Go to Authentication → Providers
   - Ensure Email provider is enabled
   - Check if "Confirm Email" is required

2. **SMTP Settings** (for password reset):
   - Go to Authentication → Settings
   - Configure SMTP settings for email
   - Or disable email confirmation for testing

3. **URL Configuration**:
   - Go to Authentication → URL Configuration
   - Add your site URL to "Site URL"
   - Add redirect URLs for password reset

### Common Fixes

#### 1. Disable Email Confirmation (For Testing)
```sql
-- Update auth settings to disable email confirmation
UPDATE auth.users 
SET email_confirmed_at = NOW() 
WHERE email = 'admin@academiajudo.com';
```

#### 2. Fix Row Level Security (RLS)
If you're getting "permission denied" errors:
```sql
-- Ensure RLS is properly configured for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for user registration
CREATE POLICY "Users can insert their own profile" ON public.profiles
FOR INSERT WITH CHECK (auth.uid() = id);

-- Create policy for viewing profiles
CREATE POLICY "Users can view all profiles" ON public.profiles
FOR SELECT USING (true);
```

#### 3. Reset Authentication Settings
```sql
-- Reset auth configuration
UPDATE auth.config SET value = 'false' WHERE key = 'mailer_autoconfirm';
UPDATE auth.config SET value = '24 hours' WHERE key = 'invite_expiry_hours';
UPDATE auth.config SET value = '24 hours' WHERE key = 'confirmation_expiry_hours';
```

## Environment Variables Check

Ensure your `.env.local` file has:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Testing Connection

1. **Test Supabase Connection**:
```javascript
// Run in browser console
const { data, error } = await supabase.from('profiles').select('count');
console.log('Connection test:', error ? '❌ Failed' : '✅ Success');
```

2. **Test Authentication**:
```javascript
// Test sign up
const { data, error } = await supabase.auth.signUp({
    email: 'test@example.com',
    password: 'Test123!'
});
console.log('Auth test:', error ? '❌ Failed: ' + error.message : '✅ Success');
```

## Alternative Setup Methods

### Method 4: Using Admin Dashboard
Once you access the admin dashboard (using Method 1 or 2), you can:
1. Go to User Management
2. Click "Add User"
3. Set role to "admin"
4. Create additional administrators

### Method 5: Bulk User Creation
For creating multiple users:
```sql
-- Create multiple test users
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at) VALUES
('instructor1@academiajudo.com', crypt('Instructor2024!', gen_salt('bf')), NOW()),
('student1@academiajudo.com', crypt('Student2024!', gen_salt('bf')), NOW()),
('student2@academiajudo.com', crypt('Student2024!', gen_salt('bf')), NOW());

-- Create their profiles
INSERT INTO public.profiles (id, email, full_name, role, belt_level) VALUES
((SELECT id FROM auth.users WHERE email = 'instructor1@academiajudo.com'), 'instructor1@academiajudo.com', 'Sensei Instructor', 'instructor', 'black'),
((SELECT id FROM auth.users WHERE email = 'student1@academiajudo.com'), 'student1@academiajudo.com', 'Estudiante Uno', 'student', 'white'),
((SELECT id FROM auth.users WHERE email = 'student2@academiajudo.com'), 'student2@academiajudo.com', 'Estudiante Dos', 'student', 'yellow');
```

## Security Notes

⚠️ **Important Security Considerations:**

1. **Change Default Passwords**: Immediately change the default admin password after setup
2. **Enable Email Confirmation**: Re-enable email confirmation for production
3. **Use Strong Passwords**: Ensure all users use strong passwords
4. **Configure SMTP**: Set up proper SMTP for production email delivery
5. **Monitor Access**: Regularly review admin access and permissions

## Next Steps

After creating your admin user:

1. **Login as Admin**: Use the credentials to access the admin dashboard
2. **Change Password**: Update the default admin password immediately
3. **Configure Settings**: Set up your academy information and preferences
4. **Add Content**: Start adding techniques, theory, and other learning materials
5. **Create Users**: Add instructors and students through the admin panel
6. **Test Features**: Ensure all functionality works correctly

## Getting Help

If you continue to experience issues:

1. **Check Supabase Logs**: Go to your Supabase project logs
2. **Test Connection**: Use the test scripts above
3. **Review Settings**: Double-check authentication and RLS settings
4. **Community Support**: Join Supabase Discord for community help
5. **Documentation**: Refer to Supabase authentication documentation

Remember to remove any temporary admin creation code before going to production!