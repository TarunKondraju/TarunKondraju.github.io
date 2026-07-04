# PUSAECMS: PUSA Internet - based Crop Management System

![Project overview image](../assets/images/pusaecms-thumb.png)

## Overview

PUSAECMS is a Google Earth Engine (GEE)-based application designed for the efficient, big-data processing of satellite imagery to provide near real-time crop health management. It integrates vegetation indices, water indices, and biophysical variables into a single, accessible platform.

**Study Area:** Global Application  
**Duration:** Feb 2022 – Present  
**Role:** Post-Doctoral Researcher / Lead Developer  
**Status:** Operational

---

## Methods & Tools

**Data Sources**

- Optical Satellite Imagery (Sentinel-2, Landsat 8/9) via GEE Data Catalog
- Ground-truth biophysical measurements for validation

**Processing Steps**

1. Ingestion and filtering of time-series satellite collections (cloud masking, atmospheric correction).
2. Dynamic computation of vegetation/water indices and engineered composite indices.
3. Estimation of physical process biophysical variables.
4. Deployment of an interactive GUI for temporal visualization and quantitative analysis by end-users.

**Tools Used**

| Tool | Purpose |
|------|---------|
| Google Earth Engine (GEE) | Cloud computing and big spatial data processing |
| JavaScript | Application logic and algorithm development |
| GEE UI API | Building the user-facing interactive dashboard |

---
## Key Aspects

- Successfully automated the extraction of crop health metrics across large spatial extents without requiring local computational power.
- Integration of Physical model - based Biophysical variable estimation like Leaf Area Index, Canopy Nitrogen Content, and Canopy Chlorophyll Content has a profound impact on accurate crop health estimation
- Integration of Digital Soil Maps (currently only for Indian Agricultural Research Institute) and another unique feature of this application. This provides accurate high resolution spatial distrubution of upto 21 soil fetrility parameters instantly. 
- Enabled non-technical stakeholders to perform quantitative analysis and visualize temporal changes in crop health at any given coordinate.
- Significantly reduced the latency between satellite overpasses and actionable agricultural intelligence.

---

## Links

