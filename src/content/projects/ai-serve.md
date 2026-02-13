---
title: "AI-SERVE Platform"
description: "NSF-funded ML platform for emergency food distribution logistics, serving the Houston Food Bank."
role: "Lead Engineer"
org: "University of Houston"
dates: "2024–2025"
tech: ["Python", "AWS Lambda", "SQS", "RDS", "PostgreSQL", "Docker", "Terraform", "nginx"]
featured: true
order: 2
---

AI-SERVE is a $1M+ NSF-funded research platform that uses machine learning to optimize emergency food distribution logistics for the Houston Food Bank. I led engineering on the full system, owning the AWS infrastructure, microservices architecture, and data pipeline reliability.

The platform deploys prediction models via AWS Lambda, orchestrates inter-service messaging with SQS, manages PostgreSQL on RDS, and serves the application through nginx reverse proxies on Elastic Beanstalk. I owned the end-to-end system architecture: data pipeline ingestion, API design, model serving, and the integration layer between ML model outputs and user-facing interactive data visualizations.

A critical challenge was executing a cross-account migration of the full microservices stack, moving everything from one AWS account to another without infrastructure-as-code in place. The pain of that migration led me to introduce Terraform and IaC practices to the lab through internal workshops, fundamentally changing how the team approached deployment.

On the related AI-SNIPS project (counterfeit pharmaceutical vendor prediction), I boosted web scraper throughput by 366% through systematic optimization of proxy management and adversarial domain handling. This eliminated the data ingestion bottleneck that was starving the downstream ML prediction models of training data.
