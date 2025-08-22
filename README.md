# Next Revolution - A Full-Stack Next.js Application

This project is a simple, full-stack application built with **Next.js 15 (App Router)** and **NextAuth.js**. It features public pages for viewing products, a secure login system, and a protected dashboard for authenticated users to manage products.

<div align="center">

[![Live Site](https://img.shields.io/badge/Live_Site-Vercel-blue?style=for-the-badge&logo=vercel)](https://new-revolution-next.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub_Repo-Source_Code-333?style=for-the-badge&logo=github)](https://github.com/nazmulxdev/next-revolution)

</div>

---

### **Project Description**

The main objective of this application is to demonstrate a modern web development workflow using the latest features of Next.js. It covers fundamental concepts such as routing with the App Router, client and server components, authentication with NextAuth.js, and API handling via Route Handlers. The application includes a landing page, a product catalog, and a protected area for product management.

---

### **Key Features**

✅ **Modern Tech Stack:** Built with Next.js 15 for optimal performance and developer experience.
✅ **Secure Authentication:** Implements social (Google) and credential-based login using NextAuth.js.
✅ **Protected Routes:** The product management dashboard is only accessible to logged-in users.
✅ **API Handling:** Uses Next.js Route Handlers to create, fetch, and manage product data.
✅ **Dynamic Routing:** Individual product details are displayed on dynamically generated pages.
✅ **Responsive Design:** A clean and fully responsive UI built with Tailwind CSS.

---

### **Technologies Used**

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextauthdotjs&logoColor=white" alt="NextAuth.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

### **Route Summary**

| Route | Description | Authentication |
| :--- | :--- | :--- |
| `/` | **Landing Page:** Displays the Navbar, Hero, Product Highlights, and Footer. | Public |
| `/login` | **Login Page:** Allows users to log in via credentials or social providers. | Public |
| `/products` | **Product List Page:** Shows a list of all available products. | Public |
| `/products/[id]` | **Product Details Page:** Shows the full details of a single product. | Public |
| `/dashboard/add-product`| **Add Product Page:** A form to add new products to the database. | **Protected** |

---

### **Setup & Installation**

Follow these steps to run the project on your local machine:

**1. Clone the repository:**
```bash
git clone [https://github.com/nazmulxdev/next-revolution.git](https://github.com/nazmulxdev/next-revolution.git)
```

**2. Navigate to the project directory:**
```bash
cd next-revolution
```

**3. Install NPM packages:**
```bash
npm install
```

**4. Set up environment variables:**
Create a file named `.env.local` in the root directory of the project and add the necessary environment variables for NextAuth.js and your database.
```.env.local
# NextAuth Secret (generate a random string)
NEXTAUTH_SECRET=your_super_secret_string

# Provider Credentials (e.g., Google)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database URL (if applicable)
DATABASE_URL=your_database_connection_string
```

**5. Run the development server:**
```bash
npm run dev
```
You can now view the project by visiting `http://localhost:3000` in your browser.
