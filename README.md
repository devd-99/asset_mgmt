# Asset Management Dashboard Documentation

## Introduction
The Asset Management Dashboard is a web application built with Next.js 13, Prisma, and Firebase authentication. It focuses on managing carbon credits and carbon credit ETFs. The dashboard provides a user-friendly interface for tracking and assessing projects related to carbon credits.

## Deployment Instructions

### Prerequisites
- Node.js (version 14 or above)
- PostgreSQL database
- Firebase account

### Step 1: Clone the Repository
Clone the Asset Management Dashboard repository from GitHub:
```
git clone https://github.com/your-username/asset-management-dashboard.git
cd asset-management-dashboard
```

### Step 2: Install Dependencies
Install the required dependencies using npm:
```
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the project root and add the following environment variables:
```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
FIREBASE_API_KEY="your-firebase-api-key"
FIREBASE_AUTH_DOMAIN="your-firebase-auth-domain"
FIREBASE_PROJECT_ID="your-firebase-project-id"
```
Replace the placeholders with your actual database and Firebase credentials.

### Step 4: Set Up Prisma
Run the Prisma migration to create the required database tables:
```
npx prisma migrate dev
```

### Step 5: Set Up Firebase Authentication
1. Go to the Firebase Console (https://console.firebase.google.com/).
2. Create a new project or select an existing one.
3. Enable the Authentication service in your Firebase project.
4. Configure the desired authentication methods (e.g., email/password, Google Sign-In).
5. Obtain the Firebase configuration details (API key, auth domain, project ID) and update the `.env` file accordingly.

### Step 6: Start the Development Server
Run the following command to start the development server:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to access the Asset Management Dashboard.

### Step 7: Build and Deploy
To build the production-ready version of the application, run:
```
npm run build
```
After the build process is complete, you can deploy the `out` directory to your preferred hosting platform (e.g., Vercel, AWS, Heroku).

## Modification Instructions

### Adding New Features
1. Create a new branch for the feature:
```
git checkout -b feature/new-feature
```
2. Implement the necessary changes in the codebase.
3. Test the feature thoroughly.
4. Commit the changes and push the branch to the remote repository:
```
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```
5. Create a pull request on GitHub to merge the feature branch into the main branch.

### Modifying the Prisma Schema
1. Open the `prisma/schema.prisma` file.
2. Make the necessary changes to the schema, such as adding new models or modifying existing ones.
3. Run the Prisma migration to apply the changes to the database:
```
npx prisma migrate dev
```
4. Update any affected code that relies on the modified schema.

### Updating Firebase Authentication
1. Go to the Firebase Console (https://console.firebase.google.com/).
2. Navigate to the Authentication section.
3. Modify the authentication settings as needed (e.g., enable/disable authentication methods, configure sign-in providers).
4. Update the Firebase configuration in the `.env` file if necessary.

## Conclusion
The Asset Management Dashboard is now set up and ready for development and deployment. With the provided instructions, you can easily modify and extend the application to incorporate new features and enhancements related to carbon credits and carbon credit ETFs.

Remember to regularly update the dependencies, monitor the application's performance, and follow best practices for security and scalability.

If you encounter any issues or have further questions, please refer to the project's documentation or reach out to the development team for assistance.