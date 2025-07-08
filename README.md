# 🚀 Automated CI/CD Pipeline for Static Website Deployment on AWS

This project implements a fully automated CI/CD pipeline for deploying a personal static website to Amazon Web Services (AWS). It was inspired by the need to frequently update and maintain a personal portfolio or blog site, without going through the hassle of manual deployments.

By integrating GitHub Actions with Terraform, the deployment process becomes seamless any time changes are pushed to the main branch, the latest version of the site is automatically deployed.

## 🛠️ Tech Stack & Infrastructure

### 🧱 Terraform

Used to define and provision the AWS infrastructure. The setup includes:

- Amazon S3
  - Configured to host the static website.
  - Static website hosting enabled with public access (or CloudFront-only access, depending on configuration).

- AWS CloudFront
  - Acts as a Content Delivery Network (CDN) for low-latency, high-availability access to the website globally.
  - Distributes content stored in S3 with HTTPS support and caching.

### ⚙️ GitHub Actions

- Automates the CI/CD process by running workflows triggered on every push to the main branch:
- Builds the static site (if needed)
- Uploads the updated files to the S3 bucket
- Invalidates the CloudFront cache to reflect changes immediately

### 🎯 Project Goal

- The goal of this project is to simplify website updates using modern DevOps practices. With this setup:
- Manual deployment is eliminated
- Updates are consistent and reliable
- Infrastructure is reproducible and version-controlled using Terraform

### ✅ Key Benefits

- Fast and secure global delivery with CloudFront
- Zero-downtime deployment with automated cache invalidation
- Infrastructure as Code with full automation
