# PUSAMIA: PUSA Multispectral Image Analyser

![Project overview image](../assets/images/pusamia-thumb.png)

## Overview

PUSAMIA is an automated pipeline application designed to co-register, layer stack, and conduct biophysical assessments of proximal multispectral images of crops, specifically tailored for UAV platforms.

**Study Area:** Global Application  
**Duration:** 2022 – Present  
**Role:** Lead Developer  
**Status:** Operational

---

## Methods & Tools

**Data Sources**

- Discrete multi-band imagery captured via UAV-mountable multispectral sensors (e.g., MicaSense).
- Radiometric calibration panel data (DLS).
- Proximal Images

**Processing Steps**

1. Radiometric calibration converting raw Digital Numbers (DN) to surface reflectance.
2. Feature-based detection to resolve intra-camera spatial offsets across 5 bands.
3. Affine/homography transformation for dynamic band alignment and layer-stacking.
4. On-the-fly calculation of precision indices (e.g., NDVI, NDRE).

**Tools Used**

| Tool | Purpose |
|------|---------|
| Multispectral Sensors | High-resolution proximal data acquisition |
| Python (OpenCV, Rasterio) | Feature detection (SIFT/ORB) and array manipulations |
| Running the pipeline natively in real - time |

---
## Key Findings

- Allows analysis of proximal multispectral images captured from UAV-mountable sensors like MicaSense or Parrot Sequoia.
- Removes the limitation of using these sensors only on drone and allows the same sensors to be used as proximal remote sensing cameras for crop health assessment.
- Successfully generated fully calibrated, multi-band reflectance layer stacks from discrete snapshots in near real-time.
- Processing is in real-time, and hence can be used at various industry level applications where multispectral analysis is reaquired over the traditional RGB based visual assessment. 

---

## Links

[View Code on GitHub](https://github.com/TarunKondraju){ .md-button }