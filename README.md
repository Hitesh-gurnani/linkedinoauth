# Login Application with Google Authentication

## What This Application Does

This is a simple web application that allows users to:

- **Sign in using their Google account** (no need to create separate passwords!)
- **Access a personalized dashboard** get personal data
- **View their profile information** safely
- **Sign out securely** when they're done

### 2. Online Services You'll Need

- **Google Account**: For setting up Google login (free)
- **Database**: PostgreSQL database (we'll explain options below)

### Step 1: Download the Project

npm install

````

### Step 2: Set Up Google Login

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add these URLs:
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
7. Copy your **Client ID** and **Client Secret** (keep these safe!)



```bash
# Google OAuth Settings (from Step 2)
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Database Connection (from Step 3)
DATABASE_URL=your_database_connection_string_here

# Security Key (make this a random, long string)
NEXTAUTH_SECRET=your_very_long_random_string_here

# App URL (keep this as is for local development)
NEXTAUTH_URL=http://localhost:3000
````

**Important**: Replace the placeholder values with your actual credentials!

### Step 5: Start the Application

```bash
# Start the development server
npm run dev
```

Open your web browser and go to: `http://localhost:3000`

You should see your login application running! 🎉

## Project Structure (What Each Folder Does)

```
login/
├── app/                     # Main website pages
│   ├── login/              # Login page
│   ├── dashboard/          # User dashboard (after login)
│   └── api/auth/           # Login/logout handling
├── components/             # Reusable website pieces
├── lib/                    # Database and utility functions
├── entities/               # Database structure definitions
└── public/                 # Images and static files
```
# linkedinoauth
