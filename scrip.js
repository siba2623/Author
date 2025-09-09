/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    color: #333;
    line-height: 1.6;
    background-color: #f9f9f9;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

a {
    text-decoration: none;
    color: #5d4037;
    transition: color 0.3s;
}

a:hover {
    color: #d7ccc8;
}

.btn {
    display: inline-block;
    background-color: #5d4037;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #3e2723;
    color: white;
}

section {
    padding: 60px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
    color: #5d4037;
    font-size: 2.2rem;
}

/* Header Styles */
header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #5d4037;
}

.logo span {
    font-weight: 300;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    font-weight: 500;
}

.search-bar {
    display: flex;
    align-items: center;
}

.search-bar input {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 5px;
}

.search-bar button {
    background: none;
    border: none;
    cursor: pointer;
    color: #5d4037;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') no-repeat center center/cover;
    color: white;
    text-align: center;
    padding: 120px 0;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 30px;
}

/* About Section */
.about-content {
    display: flex;
    align-items: center;
    gap: 40px;
}

.about-image {
    flex: 1;
}

.about-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text {
    flex: 1;
}

.about-text h2 {
    color: #5d4037;
    margin-bottom: 20px;
}

/* Books Section */
.books {
    background-color: #f5f5f5;
}

.books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.book-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.book-card:hover {
    transform: translateY(-10px);
}

.book-image {
    height: 350px;
    overflow: hidden;
}

.book-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.book-card:hover .book-image img {
    transform: scale(1.05);
}

.book-info {
    padding: 20px;
}

.book-info h3 {
    margin-bottom: 10px;
    color: #5d4037;
}

/* Zikora Section */
.zikora {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') no-repeat center center/cover;
    color: white;
    text-align: center;
    padding: 100px 0;
}

.zikora-content {
    max-width: 800px;
    margin: 0 auto;
}

.zikora-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.zikora-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

/* Contact Section */
.contact-container {
    display: flex;
    gap: 40px;
}

.contact-info {
    flex: 1;
}

.contact-info h3 {
    color: #5d4037;
    margin-bottom: 20px;
}

.contact-info p {
    margin-bottom: 20px;
}

.contact-form {
    flex: 1;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.form-group textarea {
    min-height: 150px;
}

/* Footer */
footer {
    background-color: #5d4037;
    color: white;
    padding: 40px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.social-links a {
    color: white;
    margin-left: 15px;
    font-size: 1.5rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        gap: 15px;
    }
    
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 10px;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .contact-container {
        flex-direction: column;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 20px;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
}