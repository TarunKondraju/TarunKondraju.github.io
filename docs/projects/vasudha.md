# VASUDHA: Visualise and Assess Soil Using Digital Hyperspectral Analytics

![Project overview image](../assets/images/vasudha-thumb.png)

## Overview

VASUDHA is an analytical application built to monitor crucial soil health parameters (Nitrogen, Phosphorus, Potassium, Organic Carbon, Electrical Conductivity, and pH) in real-time by analyzing VNIR/SWIR and MIR spectra. 

**Study Area:** ICAR-IARI Research Fields  
**Duration:** 2022 – Present  
**Role:** Post-Doctoral Researcher / Developer  
**Status:** Operational

---

## Methods & Tools

**Data Sources**

- VNIR/SWIR spectra generated from field spectroradiometers.
- MIR spectra generated from Fourier-Transform Infrared (FTIR) spectroscopy.

**Processing Steps**

1. Spectral data acquisition and preprocessing (smoothing, continuum removal).
2. Integration of chemometric and machine learning regression models.
3. Spectral matching and estimation of soil parameters (N, P, K, OC, EC, pH).
4. Batch processing pipeline execution for offline analysis of bulk spectral libraries.

**Tools Used**

| Tool | Purpose |
|------|---------|
| Spectroradiometer & FTIR | Proximal capture of raw soil spectral signatures |
| Python (SciPy, Scikit-learn) | Spectral signal processing and machine learning |
| Custom GUI | Providing real-time and offline mode interface for users |

---
## Key Findings

- Established a rapid, non-destructive methodology to assess soil quality, bypassing time-consuming traditional wet chemistry methods.
- Demonstrated high accuracy in mapping Available NPK, Soil Organic Carbon (SOC), EC and pH directly from spectral curves from VNIR reflectance spectra and MIR absorption spectra
- Engineered an offline batch-processing feature capable of assessing vast quantities of spectral data instantaneously.

---

## Links

[View Code on GitHub](https://github.com/TarunKondraju){ .md-button }