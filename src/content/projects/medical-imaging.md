---
title: "Medical Image Segmentation"
description: "Deep learning segmentation models for ablation zone detection in histotripsy treatment of renal tumors."
role: "ML Engineer"
org: "University of Chicago, Dept. of Radiology"
dates: "2023–2024"
tech: ["Python", "PyTorch", "NumPy", "U-Net", "Computer Vision"]
featured: true
order: 3
---

At the University of Chicago's Department of Radiology, I developed deep learning segmentation models for detecting ablation zones during histotripsy (therapeutic ultrasound) treatment of renal tumors. Histotripsy destroys tumors using focused sound waves, but it's difficult to determine from raw ultrasound images how much of the tumor has been successfully ablated. The goal was to build a segmentation model that could provide real-time feedback to surgeons during the procedure, showing the extent of tumor destruction as it happens.

Working in the BADER Lab, I implemented the full PyTorch training pipeline on proprietary medical imaging datasets: data loading, augmentation, the training loop, and evaluation. Through architecture tuning and training pipeline optimization of the U-Net model, I improved baseline segmentation performance by 240%, advancing the pipeline from non-viable predictions to research-grade segmentation on proprietary clinical data.

The dataset was a temporal sequence of ultrasound images from in vitro histotripsy procedures. I built an automated video generation pipeline that produced side-by-side comparison videos of model predictions against ground truth across the full temporal sequence. Watching the videos, we could visually observe and intuit specific failure modes that were invisible when reviewing individual static frames. The pipeline became both a diagnostic tool for accelerating model iteration and a communication tool that let the PI and team immediately understand model behavior without reading metric tables.

I led a three-person research team, and later transitioned into a project management role at Illinois Institute of Technology where I managed a 12-person research team continuing the UChicago collaboration. I coordinated across institutions with the UChicago PI and scaled the team 70% by building a structured onboarding pipeline that sustained growth despite high turnover in research lab environments.

This experience shaped how I think about ML systems: the model is only part of the story. Data quality, pipeline reliability, and evaluation methodology matter just as much as architecture choice. That perspective carries into every production ML system I build today.
