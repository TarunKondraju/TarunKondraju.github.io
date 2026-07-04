# PUSA eCMS Desktop

![PUSA eCMS Desktop](../assets/images/pusaecms-desktop-thumb.png)

## Overview

The **PUSA Cloud-based Crop Monitoring System (PUSA eCMS) Desktop** is a robust, dynamic geospatial desktop application designed to stream, process, and analyze Sentinel-2 L2A satellite imagery. By seamlessly integrating multiple backend cloud providers (Google Earth Engine, Microsoft Planetary Computer, and Copernicus Data Space), it empowers users to generate survey-grade agricultural and environmental datasets completely on the fly without downloading massive raw satellite files.

## Key Features

### Multi-Backend Cloud Streaming
PUSA eCMS Desktop utilizes advanced STAC API querying and `rasterio`'s `/vsicurl/` driver to stream data directly from Microsoft Azure and Copernicus servers using HTTP Range Requests. This allows the application to extract only the specific pixels needed for a user-drawn Shapefile or GeoJSON bounding box, cutting data transfer requirements from Gigabytes down to Megabytes.

### Self-Healing Network Protocol
Cloud providers like Azure aggressively rate-limit anonymous API access, frequently throwing HTTP 503 errors and dropping connections during massive data streams. To combat this, PUSA eCMS Desktop features a custom-built, self-healing network retry loop with exponential backoff that automatically catches connection drops and flawlessly resumes data streaming without crashing the application.

### Biophysical Machine Learning Engine
Unlike traditional spectral indices (like NDVI), PUSA eCMS Desktop features an integrated Machine Learning module powered by Scikit-Learn. It leverages pre-trained **Gaussian Process Regressors** to calculate complex biophysical traits from 10-band spectral signatures:
- **Leaf Area Index (LAI)**
- **Canopy Chlorophyll Content (CCC)**
- **Canopy Water Content (CWC)**

To prevent the ML algorithms from crashing on transparent masked boundary regions, the engine dynamically filters `NaN` values before inference and reconstructs the maps geometrically.

### PyQt6 Dynamic Interface
The user experience is driven by a highly responsive, multithreaded PyQt6 Graphical User Interface. All downloading, API signing, and array processing occurs seamlessly in a C++ accelerated background worker thread. Real-time stdout interception pipes network logs, retry warnings, and processing status directly to the GUI console for total transparency.

## Technical Stack
- **Languages:** Python
- **GUI Framework:** PyQt6
- **Geospatial Processing:** Rasterio, Shapely, PyProj
- **Cloud/APIs:** STAC (pystac-client), Microsoft Planetary Computer API, Google Earth Engine API, openEO
- **Machine Learning:** Scikit-Learn (Gaussian Process Regressor)

---

## Links

