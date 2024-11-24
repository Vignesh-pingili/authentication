CSV File Processor
Overview
The CSV File Processor is a web application built with Next.js that allows users to upload and process CSV files. It includes authentication using NextAuth.js with support for Google, LinkedIn, and ORCID providers.

Features
Drag-and-drop file upload
Authentication with Google, LinkedIn, and ORCID
Mobile-responsive design
Robust error handling for invalid CSV files

Prerequisites
Before running the application locally, ensure you have the following installed:

Node.js (version 16 or later)
npm or yarn

Installation

1.git clone <repository-url>
cd csv-file-processor

2.npm install

3.Set Up Environment Variables Create a .env file in the root directory and configure the following variables:
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

LINKEDIN_ID=your-linkedin-client-id
LINKEDIN_SECRET=your-linkedin-client-secret

ORCID_CLIENT_ID=your-orcid-client-id
ORCID_CLIENT_SECRET=your-orcid-client-secret

NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET=your-random-secret

4.Setting Up Google OAuth Credentials
Visit the Google Cloud Console.
Create a new project (or use an existing one).
Navigate to APIs & Services > Credentials.
Create new credentials for an OAuth 2.0 Client ID:
Application Type: Web Application
Authorized Redirect URI: http://localhost:3000/api/auth/callback/google
Copy the Client ID and Client Secret into the .env file.

5.Setting Up LinkedIn OAuth Credentials
Go to the LinkedIn Developer Portal.
Create a new application.
Navigate to the Auth tab and configure the Redirect URL:
Use: http://localhost:3000/api/auth/callback/linkedin
Copy the Client ID and Client Secret into the .env file.

Running the Application
1.Start the Development Server: npm run dev
2.Build for Production: npm run build
npm start