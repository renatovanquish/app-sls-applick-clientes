const Person = ({ ...props }) => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      className="inline-block"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M448.005,512h-47.997c-8.843,0-15.999-7.156-15.999-16.001
	c0-8.828,7.156-16,15.999-16h47.997c17.686,0,31.997-14.32,31.997-31.985v-48.009c0-8.845,7.172-16.001,15.999-16.001
	c8.844,0,15.999,7.156,15.999,16.001v48.009C512,483.351,483.361,512,448.005,512L448.005,512z M511.484,295.899
	c-0.234,1.938-0.539,3.836-0.953,5.703c-0.109,0.555-0.281,1.062-0.406,1.594c-0.398,1.634-0.844,3.29-1.375,4.884
	c-0.172,0.539-0.375,1.039-0.562,1.562c-0.562,1.539-1.155,3.062-1.835,4.539c-0.273,0.57-0.539,1.148-0.805,1.703
	c-0.703,1.438-1.453,2.852-2.266,4.234c-0.234,0.414-0.5,0.82-0.75,1.234c-0.969,1.562-1.969,3.109-3.062,4.578
	c-0.172,0.211-0.312,0.391-0.453,0.609c-1.234,1.633-2.547,3.195-3.93,4.695c-0.055,0.078-0.148,0.148-0.195,0.219
	c-1.452,1.562-2.983,3.07-4.577,4.47c-11.28,9.977-26.061,16.07-42.31,16.07h-31.99c-35.357,0-64.012,28.673-64.012,64.01v32.009
	c0,16.235-6.093,31.017-16.069,42.298c-1.413,1.617-2.89,3.125-4.468,4.578c-0.086,0.086-0.18,0.18-0.273,0.25
	c-1.414,1.328-2.906,2.548-4.445,3.735c-0.336,0.25-0.68,0.5-1.023,0.75c-1.398,1.023-2.852,1.992-4.32,2.891
	c-0.437,0.25-0.843,0.516-1.28,0.766c-1.375,0.812-2.797,1.562-4.234,2.266c-0.562,0.266-1.125,0.539-1.703,0.805
	c-1.469,0.664-3,1.273-4.539,1.828c-0.523,0.203-1.023,0.398-1.562,0.578c-1.602,0.539-3.241,0.969-4.882,1.359
	c-0.531,0.125-1.031,0.305-1.594,0.414c-1.859,0.414-3.766,0.719-5.703,0.953c-0.305,0.031-0.609,0.086-0.914,0.125
	c-2.297,0.25-4.632,0.391-6.976,0.391h-5.406h-42.603c-8.839,0-16.003-7.156-16.003-16.001c0-8.828,7.164-16,16.003-16h48.009
	c17.671,0,31.982-14.32,31.982-31.985v-32.009c0-53.025,42.989-95.995,96.017-95.995h31.99c17.686,0,31.997-14.336,31.997-32.001
	V240c0-8.829,7.172-16,15.999-16c8.844,0,15.999,7.172,15.999,16v42.603v5.406c0,2.344-0.141,4.68-0.391,6.977
	C511.578,295.29,511.516,295.595,511.484,295.899L511.484,295.899z M511.484,135.895c-0.234,1.938-0.539,3.836-0.953,5.704
	c-0.109,0.555-0.281,1.055-0.406,1.594c-0.398,1.633-0.844,3.281-1.375,4.883c-0.172,0.539-0.375,1.039-0.562,1.562
	c-0.562,1.539-1.155,3.063-1.835,4.54c-0.273,0.57-0.539,1.148-0.805,1.703c-0.703,1.43-1.453,2.852-2.266,4.234
	c-0.234,0.406-0.5,0.82-0.75,1.234c-0.969,1.562-1.969,3.102-3.062,4.578c-0.172,0.211-0.312,0.391-0.453,0.609
	c-1.234,1.633-2.547,3.188-3.93,4.696c-0.055,0.078-0.148,0.148-0.195,0.219c-1.452,1.562-2.983,3.062-4.577,4.469
	c-11.28,9.969-26.061,16.071-42.31,16.071h-31.99c-35.357,0-64.012,28.665-64.012,64.01v16.001c0,44.188-35.81,79.994-79.986,79.994
	H256.01c-35.36,0-64.007,28.673-64.007,64.01v32.009c0,16.235-6.098,31.017-16.073,42.298c-1.418,1.617-2.887,3.125-4.465,4.578
	c-0.09,0.086-0.18,0.18-0.27,0.25c-1.418,1.328-2.906,2.548-4.449,3.735c-0.34,0.25-0.684,0.5-1.022,0.75
	c-1.398,1.023-2.852,1.992-4.324,2.891c-0.43,0.25-0.844,0.516-1.273,0.766c-1.383,0.812-2.801,1.562-4.238,2.266
	c-0.555,0.266-1.129,0.539-1.703,0.805c-1.469,0.664-2.995,1.273-4.538,1.828c-0.52,0.203-1.02,0.398-1.559,0.578
	c-1.598,0.539-3.246,0.969-4.879,1.359c-0.539,0.125-1.043,0.305-1.598,0.414c-1.867,0.414-3.77,0.719-5.706,0.953
	c-0.305,0.031-0.609,0.086-0.914,0.125c-2.297,0.25-4.629,0.391-6.977,0.391h-5.401H64.008C28.666,512,0,483.351,0,448.014v-48.009
	c0-8.845,7.176-16.001,15.999-16.001c8.843,0,16.003,7.156,16.003,16.001v48.009c0,17.665,14.335,31.985,32.006,31.985h64.007
	c17.667,0,31.986-14.32,31.986-31.985v-32.009c0-53.025,42.981-95.995,96.009-95.995h7.999h8.008
	c26.49,0,47.981-21.493,47.981-48.009V264v-8c0-53.009,42.989-95.995,96.017-95.995h31.99c17.686,0,31.997-14.336,31.997-32.009
	v-64.01c0-17.665-14.312-32.001-31.997-32.001h-47.997c-8.843,0-15.999-7.156-15.999-15.985c0-8.844,7.156-16,15.999-16h47.997
	C483.361,0,512,28.649,512,63.986v58.611v5.398c0,2.352-0.141,4.688-0.391,6.984C511.578,135.285,511.516,135.59,511.484,135.895
	L511.484,135.895z M15.999,95.995c8.843,0,16.003,7.156,16.003,16s-7.16,16-16.003,16c-8.823,0-15.999-7.156-15.999-16
	S7.176,95.995,15.999,95.995L15.999,95.995z M272.017,191.99H256.01c-35.36,0-64.007,28.665-64.007,64.01v16.001
	c0,44.188-35.811,79.994-79.991,79.994H64.008c-16.198,0-30.943-6.078-42.232-16c-1.632-1.438-3.175-2.946-4.663-4.54
	c-0.07-0.07-0.125-0.141-0.199-0.219c-1.414-1.539-2.742-3.133-4-4.805c-0.105-0.125-0.18-0.266-0.285-0.391
	c-1.148-1.547-2.227-3.164-3.23-4.812c-0.195-0.32-0.41-0.625-0.59-0.953c-0.918-1.555-1.741-3.133-2.53-4.789
	c-0.18-0.359-0.375-0.711-0.539-1.094c-0.789-1.719-1.488-3.477-2.117-5.289c-0.086-0.289-0.215-0.539-0.305-0.828
	c-0.52-1.555-0.949-3.188-1.363-4.806c-0.18-0.68-0.375-1.344-0.52-2.047c-0.359-1.688-0.629-3.406-0.844-5.148
	c-0.07-0.43-0.16-0.875-0.195-1.312C0.145,292.688,0,290.353,0,288.009v-5.406v-58.604c0-35.345,28.666-63.994,64.008-63.994h32.005
	h8h7.999c26.494,0,47.989-21.493,47.989-48.009v-8v-8V63.986c0-17.665-14.319-32.001-31.986-32.001H64.008
	c-13.976,0-25.741,9.04-30.1,21.547l-0.164-0.055c-2.258,6.118-8.094,10.508-14.979,10.508c-8.848,0-16.003-7.156-16.003-16
	c0-1.742,0.34-3.391,0.859-4.969l-0.035-0.016c0.035-0.125,0.125-0.234,0.164-0.359c0.25-0.68,0.52-1.289,0.844-1.922
	C13.937,16.93,36.919,0,64.008,0h58.605h5.401c2.348,0,4.68,0.141,6.977,0.391c0.305,0.039,0.609,0.094,0.914,0.125
	c1.937,0.234,3.839,0.539,5.706,0.953c0.555,0.109,1.059,0.289,1.598,0.414c1.633,0.391,3.281,0.82,4.879,1.359
	c0.539,0.18,1.039,0.375,1.559,0.578c1.543,0.555,3.069,1.164,4.538,1.828c0.574,0.266,1.148,0.539,1.703,0.805
	c1.438,0.703,2.855,1.453,4.238,2.266c0.43,0.25,0.844,0.516,1.273,0.766c1.473,0.898,2.926,1.867,4.324,2.891
	c0.339,0.25,0.683,0.5,1.022,0.758c1.543,1.18,3.031,2.398,4.449,3.727c0.09,0.07,0.18,0.164,0.27,0.25
	c1.578,1.453,3.047,2.961,4.465,4.578c9.976,11.282,16.073,26.063,16.073,42.298v48.009c0,44.189-35.811,79.995-79.991,79.995
	H64.008c-17.671,0-32.006,14.336-32.006,32.009v64.01c0,17.665,14.335,32.001,32.006,32.001h32.005h8h7.999
	c26.494,0,47.989-21.493,47.989-48.009V264v-8c0-53.009,42.981-95.995,96.009-95.995h7.999h8.008
	c26.49,0,47.981-21.493,47.981-48.009v-8v-8V63.986c0-17.665-14.312-32.001-31.982-32.001h-48.009
	c-8.839,0-16.003-7.156-16.003-15.985c0-8.844,7.164-16,16.003-16h42.603h5.406c2.344,0,4.679,0.141,6.976,0.391
	c0.305,0.039,0.609,0.094,0.914,0.125c1.938,0.234,3.844,0.539,5.703,0.953c0.562,0.109,1.062,0.289,1.594,0.414
	c1.641,0.391,3.28,0.82,4.882,1.359c0.539,0.18,1.039,0.375,1.562,0.578c1.539,0.555,3.07,1.164,4.539,1.828
	c0.578,0.266,1.141,0.539,1.703,0.805c1.438,0.703,2.859,1.453,4.234,2.266c0.438,0.25,0.844,0.516,1.28,0.766
	c1.469,0.898,2.922,1.867,4.32,2.891c0.344,0.25,0.688,0.5,1.023,0.758c1.539,1.18,3.031,2.398,4.445,3.727
	c0.094,0.07,0.188,0.164,0.273,0.25c1.578,1.453,3.055,2.961,4.468,4.578c9.977,11.282,16.069,26.063,16.069,42.298v48.009
	C352.003,156.185,316.193,191.99,272.017,191.99L272.017,191.99z"
      />
    </svg>
  )
}

export default Person
