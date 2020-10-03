import React from 'react';

const Iframe = () => {
   
    return (
        <div>
        <style dangerouslySetInnerHTML={{__html: ".embed-container {position: relative; padding-bottom: 40%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}" }} /><div className="embed-container"><iframe width={500} height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} title="Nasa Global Imagery" src="//404ds.maps.arcgis.com/apps/Embed/index.html?webmap=1351c90c71144868a07dd1a15aa3f073&extent=78.5197,6.8096,84.9906,10.0477&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light" /></div>
      </div>
    );
};

export default Iframe;