# FieldMapper: Open-Source UAV Photogrammetry & Orthomosaic Pipeline

![Project overview image](../assets/images/fieldmapper-thumb.png)

## Overview

FieldMapper is a comprehensive, Python-based photogrammetry application developed as a robust, open-source alternative to proprietary UAV data processing software like Pix4D and Agisoft Metashape. It is engineered to process raw drone imagery and generate survey-grade 3D outputs (DSM, DTM, Point Clouds) alongside highly accurate orthomosaics across RGB, multispectral, and thermal sensor datasets.

**Study Area:** Various Agricultural and Environmental Sites  
**Duration:** 2023 – Present  
**Role:** Lead Developer / Geospatial Scientist  
**Status:** Operational

---

## Methods & Tools

**Data Sources**

- Multispectral imagery from MicaSense sensors (including Downwelling Light Sensor [DLS] and calibration panel images).
- Standard high-resolution RGB sensor data.
- Single-band radiometric thermal imagery.

**Processing Steps**

1. **Radiometric Calibration:** Conversion of raw multispectral Digital Numbers (DN) to accurate surface reflectance using DLS telemetry and pre-flight calibration panel images.
2. **3D Reconstruction:** Execution of sparse 3D reconstruction and camera pose estimation using COLMAP, followed by dense point cloud generation via OpenMVS to extract Digital Surface Models (DSM) and Digital Terrain Models (DTM).
3. **Feature Matching & Registration:** Utilization of Scale-Invariant Feature Transform (SIFT) to detect keypoints, computing affine and homography matrices to resolve spatial intra-camera offsets.
4. **Warping & Layer Stacking:** Dynamic warping and layer-stacking of the aligned images to produce seamless, multi-band multispectral orthomosaics, RGB orthomosaics, and single-band thermal maps.

**Tools Used**

| Tool | Purpose |
|------|---------|
| Python (OpenCV, Rasterio) | Automated feature matching (SIFT), warping, and geospatial raster handling |
| COLMAP & OpenMVS | Structure-from-Motion (SfM), dense 3D point cloud, and elevation model generation |
| MicaSense Image Processing | Scientific radiometric calibration (DN-to-Reflectance) |

---
## Key Findings & Novelties

- **Cost-Effective Scalability:** Successfully developed a completely open-source, scriptable alternative to expensive commercial photogrammetry software, enabling unlimited bulk processing without licensing bottlenecks.
- **Scientific Rigor:** Integrated rigorous radiometric calibration (DLS + Panel) natively into the photogrammetric pipeline, ensuring that the resulting multispectral orthomosaics are immediately ready for accurate biophysical modeling.
- **Multi-Sensor Versatility:** Engineered a unified pipeline capable of generating distinct spatial products from three entirely different sensor modalities (RGB, 5-Band Multispectral, Thermal) with high-precision spatial alignment.

---

## Links

[View Code on GitHub](https://github.com/TarunKondraju){ .md-button }