/* CSS styles */

html {
    margin: 3em;
}

/* canvas {
  display: block;
  margin: 0 auto;
  border: 1px solid black;
} */

/* .information {
  width: 640px;
  margin: 0 auto 50px;
}

#tracker {
  position: absolute;
  top: 0;
  right: 10px;
  background-color: white;
} */

body {
    height: 100%;
    color: var(--primary-color);
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: normal;
    cursor: none; /*this hides the default cursor*/
}

#cursors {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.custom-cursor {
  position: absolute; 
  z-index: 999;
  width: 50px;
  height: 10px; 
  background-color: black;
  z-index: 1000; 
  pointer-events: none;
  transform-origin: 50% 0%; 
  border-radius: 1px;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.5);
  /* shadow default has no offset */
}

hr {
    width: 100%;
    text-align: left;
    margin-left: 0;
    height: 1px;
    opacity: 0.8;
    /* border-width: 10px; */
    color: var(--primary-color);
}

.container {
  display:inline-block;
  float: left;
  min-height: 90vh;
}

/* 
iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
} */

/* Font Family Reference
.ibm-plex-mono-thin {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 100;
    font-style: normal;
  }
  
.ibm-plex-mono-extralight {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: normal;
  }
  
  .ibm-plex-mono-light {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: normal;
  }
  
  .ibm-plex-mono-regular {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }
  
  .ibm-plex-mono-medium {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
  }
  
  .ibm-plex-mono-semibold {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-style: normal;
  }
  
  .ibm-plex-mono-bold {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    font-style: normal;
  }
  
  .ibm-plex-mono-thin-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 100;
    font-style: italic;
  }
  
  .ibm-plex-mono-extralight-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: italic;
  }
  
  .ibm-plex-mono-light-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: italic;
  }
  
  .ibm-plex-mono-regular-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: italic;
  }
  
  .ibm-plex-mono-medium-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: italic;
  }
  
  .ibm-plex-mono-semibold-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-style: italic;
  }
  
  .ibm-plex-mono-bold-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    font-style: italic;
  }
 
    
