// Initialize Admin User Script
// This script creates the first admin user for the Judo Academy

// Import Supabase client
import { supabase, auth, db, initializeAdminUser } from './supabase.js';

// Initialize admin user
async function setupFirstAdmin() {
    console.log('🔧 Setting up first admin user for Judo Academy...\n');
    
    try {
        // Check if we're already logged in
        const { data: { user } } = await auth.getUser();
        
        if (user) {
            console.log('✅ Already logged in as:', user.email);
            console.log('🔄 Signing out to create new admin...\n');
            await auth.signOut();
        }
        
        // Initialize admin user
        const result = await initializeAdminUser();
        
        if (result.success) {
            console.log('🎉 Admin user setup completed successfully!\n');
            
            if (result.credentials) {
                console.log('📋 Admin Credentials:');
                console.log('   Email:', result.credentials.email);
                console.log('   Password:', result.credentials.password);
                console.log('   ⚠️  IMPORTANT: Change the default password after first login!\n');
            }
            
            console.log('🚀 You can now:');
            console.log('   1. Go to your website login page');
            console.log('   2. Use the admin credentials above');
            console.log('   3. Access the admin dashboard');
            console.log('   4. Start managing your Judo Academy!\n');
            
            // Test login with new admin
            console.log('🔍 Testing admin login...');
            const { data: loginData, error: loginError } = await auth.signIn(
                result.credentials?.email || 'admin@academiajudo.com',
                result.credentials?.password || 'AdminJudo2024!'
            );
            
            if (loginData.user) {
                console.log('✅ Admin login test successful!');
                console.log('👤 Logged in as:', loginData.user.email);
                console.log('🔐 User ID:', loginData.user.id);
                console.log('👑 Role:', loginData.user.user_metadata?.role || 'admin');
            } else {
                console.log('❌ Admin login test failed:', loginError?.message);
            }
            
        } else {
            console.log('❌ Admin setup failed:', result.error);
            console.log('\n💡 Troubleshooting:');
            console.log('   - Check your Supabase configuration');
            console.log('   - Verify environment variables');
            console.log('   - Ensure database schema is properly set up');
            console.log('   - Check Supabase authentication settings');
        }
        
    } catch (error) {
        console.error('💥 Setup error:', error.message);
        console.log('\n🔧 Debug Info:');
        console.log('   Error:', error);
        console.log('   Supabase URL:', import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing');
        console.log('   Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');
    }
}

// Check database connection
async function checkDatabaseConnection() {
    console.log('🔍 Checking database connection...\n');
    
    try {
        // Test basic connection
        const { data, error } = await supabase.from('profiles').select('count');
        
        if (error) {
            console.log('❌ Database connection failed:', error.message);
            console.log('\n🔧 Check the following:');
            console.log('   1. Supabase project is running');
            console.log('   2. Environment variables are correct');
            console.log('   3. Database schema is applied');
            console.log('   4. Row Level Security is configured');
            return false;
        }
        
        console.log('✅ Database connection successful!');
        console.log('📊 Profiles table exists and is accessible\n');
        return true;
        
    } catch (error) {
        console.log('❌ Connection check error:', error.message);
        return false;
    }
}

// Main execution
async function main() {
    console.log('🏫 Judo Academy - Admin Setup Tool\n');
    console.log('='.repeat(50));
    
    // Check environment variables
    console.log('🔍 Environment Check:');
    console.log('   Supabase URL:', import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing');
    console.log('   Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing');
    console.log('');
    
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        console.log('❌ Missing environment variables!');
        console.log('\n📝 Please create a .env.local file with:');
        console.log('   VITE_SUPABASE_URL=your-supabase-url');
        console.log('   VITE_SUPABASE_ANON_KEY=your-anon-key');
        console.log('\n🌐 Get these from your Supabase project settings');
        return;
    }
    
    // Check database connection
    const dbConnected = await checkDatabaseConnection();
    if (!dbConnected) {
        console.log('\n❌ Cannot proceed without database connection');
        return;
    }
    
    console.log('='.repeat(50));
    
    // Setup admin
    await setupFirstAdmin();
    
    console.log('\n' + '='.repeat(50));
    console.log('✨ Setup complete! Your Judo Academy is ready! 🥋\n');
}

// Run the setup
main().catch(console.error);