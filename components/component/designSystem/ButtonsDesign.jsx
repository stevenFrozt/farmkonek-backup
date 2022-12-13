import React from "react";
import Button from "component/UI/Button/Button";
import UploadButton from "component/UI/UploadButton";

const ButtonsDesign = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Button</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="sm">Small</Button>
          <Button>Default Size</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button>Default Button</Button>
          <Button color="red">Default Red</Button>
          <Button color="yellow">Default Yellow</Button>
          <Button color="blue">Default Blue</Button>
          <Button color="gray">Default Gray</Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button variant="outlined">Outlined Default</Button>
          <Button variant="outlined" color="red">
            Outlined Red
          </Button>
          <Button variant="outlined" color="yellow">
            Outlined Yellow
          </Button>
          <Button variant="outlined" color="blue">
            Outlined Blue
          </Button>
          <Button variant="outlined" color="gray">
            Outlined Gray
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button variant="light">Light Default</Button>
          <Button variant="light" color="red">
            Light Red
          </Button>
          <Button variant="light" color="yellow">
            Light Yellow
          </Button>
          <Button variant="light" color="blue">
            Light Blue
          </Button>
          <Button variant="light" color="gray">
            Light Gray
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button variant="subtle">Subtle Default</Button>
          <Button variant="subtle" color="red">
            Subtle Red
          </Button>
          <Button variant="subtle" color="yellow">
            Subtle Yellow
          </Button>
          <Button variant="subtle" color="blue">
            Subtle Blue
          </Button>
          <Button variant="subtle" color="gray">
            Subtle Gray
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Upload Button</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <UploadButton>Upload</UploadButton>
        </div>
      </div>
    </>
  );
};

export default ButtonsDesign;
