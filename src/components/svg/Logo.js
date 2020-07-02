import React from 'react'

export default function SVG({
    style = {},
    fill = '#000',
    width = '',
    height = '',
    className = '',
    viewBox = '70 0 150 60',
}) {
    return (
        <svg
            width={width}
            style={style}
            height={height}
            viewBox={viewBox}
            stroke="#000"
            x="0px"
            y="0px"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} svg-icon`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <g>
                    <path
                        className="pass"
                        d="M82.453,44.461c0.338-0.24,0.773-0.36,0.918-0.84c-0.193-0.601-0.58-0.96-0.87-1.44c-2.61-3.899-4.156-6.96-2.126-9.72
		c1.981-2.76,4.833-2.88,8.215-1.38c0.387,0.18,0.773,0.42,1.063,0.9c0.097,0.18,0.097,0.6-0.048,0.659
		c-0.145,0.061-0.29,0.061-0.387-0.06c-1.063-1.14-2.319-1.439-3.624-1.5c-4.978-0.3-2.754,4.86,0.725,10.8
		c0.338,0.6,0.725,0.66,1.256,0.479c3.044-1.199,4.011-1.079,6.041-3.659l0.386-0.54c0.097-0.12,0.193-0.3,0.338-0.181
		c0.193,0.061,0.097,0.301,0.048,0.42c-0.918,2.7-2.561,3.12-6.669,4.74c-0.242,0.061-0.29,0.3-0.193,0.54
		c0.193,0.42,0.387,0.72,0.532,1.08c1.933,4.08,1.401,9.06-2.561,9.119C81.341,53.94,79.022,47.28,82.453,44.461z M86.271,50.101
		c0-2.16-1.015-3.78-2.029-5.4c-0.193-0.239-0.435-0.3-0.677-0.18c-0.966,0.601-2.175,1.98-2.078,4.14
		c0.145,3.12,3.334,5.88,4.398,3.54C86.222,51.54,86.222,50.82,86.271,50.101z"
                    />
                    <path
                        className="pass"
                        d="M107.293,39.001c0.145-0.36,0.29-0.78,0.483-1.08c0.387-0.479,0.628-0.12,0.532,0.3c-0.097,0.54-0.193,1.08-0.387,1.561
		c-1.015,2.939-2.271,5.699-3.914,8.219c-4.156,6.721-9.085,3.721-9.955-4.68c-0.387-5.22-0.048-13.199,0.677-20.759
		c-6.862,0.12-13.435,0.18-16.431,0.18c-0.628,0-0.58-1.08,0.097-1.14c2.996,0,9.617-0.06,16.479-0.18
		c0.338-3.6,0.773-7.14,1.208-10.199c0.58-4.56,4.494-6.18,3.624-1.32c-0.242,1.98-0.58,3.9-0.87,5.88l-0.677,5.58
		c7.732-0.18,15.078-0.3,17.445-0.42c0.966,0,0.725,0.72,0.338,0.96c-2.417,0.24-10.003,0.48-17.929,0.6
		c-1.836,8.879-2.416,31.019,2.61,28.019C103.379,49.021,104.732,45.001,107.293,39.001z"
                    />
                    <path
                        className="pass"
                        d="M106.232,44.28c0.435-2.76,1.74-4.199,3.769-5.76c1.063-0.6-0.966-0.12-2.513-0.3c-3.817-0.479-5.268-6.18-2.078-8.279
		c2.513-1.68,5.413-0.66,4.929,2.52c-0.145,1.32-0.483,2.58-1.063,3.72c-0.532,1.261-0.29,1.08,1.063,0.9
		c2.271-0.48,4.011-0.18,2.707,1.439c-0.242,0.36-0.58,0.601-0.87,0.96c-1.885,1.98-3.238,4.74-2.948,7.44
		c0.242,2.279,1.063,2.819,2.658,1.68c1.933-1.38,3.431-4.2,4.784-7.319c0.435-1.021,0.87-2.04,1.305-3
		c0.58-0.96,0.773-0.601,0.483,0.3c-0.966,2.7-2.078,5.279-3.479,7.68c-0.918,1.62-2.271,3.12-3.962,3.659
		C108.02,50.82,105.604,48,106.232,44.28z M108.455,36.361c0.677-1.08,0.967-2.34,1.063-3.66c0.048-0.84-0.193-1.56-0.677-2.1
		c-0.435-0.54-1.015-0.48-1.401,0.12c-1.063,1.62-0.773,4.14,0.193,5.64C107.923,36.781,108.213,36.781,108.455,36.361z"
                    />
                    <path
                        className="pass"
                        d="M139.77,38.221c-1.643,4.26-5.799,13.92-9.375,13.38c-2.803-0.601-2.319-6.54-1.208-11.28
		c-1.885,4.92-3.576,11.04-6.621,12.12c-6.813,2.399-7.394-8.939-3.431-17.1c1.691-3.42,4.784-5.52,6.814-5.04
		c2.464,0.78,4.929,4.68,3.141,7.62c-0.29-0.36-0.097-0.72,0-1.02c0.483-2.641-2.851-6.54-4.397-5.101
		c-4.204,3.181-7.49,21.3-2.465,20.159c3.528-0.779,5.606-10.439,8.07-15.359l0.097-0.18c0.338-0.72,0.677-1.38,1.836-1.2
		c0.58,0.061,0.918,0.54,0.725,1.26c-0.966,3.54-2.658,10.2-2.513,12.54c0.628,5.279,5.896-4.56,8.264-9.54l0.725-1.56
		C139.432,37.921,139.77,37.681,139.77,38.221z"
                    />
                    <path
                        className="pass"
                        d="M138.806,58.74c-0.29-0.3-0.338-0.72-0.435-1.141c-0.29-1.56-0.338-3.18-0.338-4.799c0-3.181,0.193-6.3,0.483-9.42
		c0.435-4.62,0.918-9.3,1.643-13.859c0.58-3.48,1.111-7.02,2.029-10.38c0.242-0.72,0.435-1.44,0.677-2.16
		c0.097-0.36,0.29-0.66,0.483-0.9c0.29-0.36,0.676-0.42,1.063-0.24c0.387,0.12,0.483,0.6,0.435,1.02c0,0.72-0.048,1.44-0.145,2.1
		c-0.967,6.239-1.981,12.419-2.948,18.599c-0.145,1.021-0.435,1.98-0.338,3.3c0.29-0.779,0.435-1.38,0.531-1.979
		c0.822-3.54,1.933-6.899,3.431-10.08c0.87-1.92,1.981-3.54,3.383-4.92c0.966-0.9,2.078-1.26,3.286-1.2
		c1.256,0.12,2.175,0.84,2.754,2.28c0.532,1.38,0.87,2.94,1.063,4.44c0.435,3.18,0.532,6.359,0.097,9.539c-0.048,0.24,0,0.48,0,0.78
		c1.015-0.18,1.836-0.899,2.755-1.14c0.966-0.181,1.836-0.84,2.851-0.66c-0.048,0.54-0.387,0.6-0.628,0.66
		c-1.546,0.6-2.996,1.38-4.494,2.22c-0.628,0.36-0.966,0.78-1.111,1.68c-0.387,1.98-0.918,3.9-1.498,5.82
		c-0.677,2.04-1.45,3.96-2.562,5.64c-1.401,2.1-3.093,3.6-5.219,4.319c-0.87,0.301-1.74,0.301-2.61,0.181
		c-0.821-0.12-1.594-0.48-2.223-1.261c-0.145-0.18-0.29-0.479-0.58-0.42c-0.242,0.48-0.145,1.021-0.29,1.561
		c-0.096,0.3-0.193,0.66-0.483,0.779C139.434,59.22,139.095,59.1,138.806,58.74z M141.802,49.98c1.643-2.22,3.576-3.84,5.75-5.16
		c1.546-0.96,3.093-1.92,4.688-2.819c0.483-0.24,0.773-0.66,0.87-1.26c0.193-1.261,0.387-2.521,0.483-3.78c0.145-3,0-6-0.387-8.939
		c-0.145-1.08-0.338-2.16-0.725-3.12c-0.483-1.2-0.967-1.38-1.885-0.72c-0.967,0.72-1.788,1.68-2.465,2.76
		c-1.015,1.44-1.739,3.06-2.416,4.68c-1.45,3.6-2.464,7.319-3.238,11.22c-0.483,2.34-0.821,4.8-1.111,7.38
		C141.608,50.04,141.753,50.04,141.802,49.98z M147.166,56.04c1.256-1.14,2.175-2.7,2.851-4.439c0.967-2.4,1.691-4.86,2.368-7.38
		c0.048-0.24,0.145-0.54-0.048-0.84c-0.145,0-0.29,0-0.435,0.06c-1.981,1.141-3.962,2.4-5.847,3.9
		c-0.967,0.779-1.885,1.68-2.706,2.699c-0.725,0.9-1.305,1.92-1.74,3.061c-0.435,1.199-0.242,2.279,0.386,3.239
		c0.677,1.021,1.546,1.38,2.562,1.2C145.571,57.42,146.393,56.76,147.166,56.04z"
                    />
                    <path
                        className="pass"
                        d="M170.703,36.361c0.87-1.5,2.706-1.74,2.223,0.54c-1.063,5.22-1.498,11.219,0.918,9.719c1.981-1.14,3.479-4.499,4.397-7.739
		c0.435-1.26,1.111-1.68,0.773-0.48c-1.208,3.721-2.319,7.08-4.446,8.7C169.929,50.7,167.271,42.48,170.703,36.361z M173.505,30.901
		c0.387,0.12,0.58,0.54,0.532,1.08c0,0.72-0.242,1.319-0.773,1.62c-0.29,0.18-0.628,0.18-0.966,0.119
		C170.606,33.481,171.524,30.061,173.505,30.901z"
                    />
                    <path
                        className="pass"
                        d="M179.257,34.141c0.821-2.399,4.011-4.379,3.721-2.1l-0.29,1.561c-1.208,6.18-1.546,6.659-1.884,12.359
		c0,0.54,0.097,1.979,0.58,1.38c0.338-0.54,0.532-1.2,0.773-1.92c1.595-5.521,1.836-6.78,2.996-9.96
		c0.338-1.02,1.256-2.76,2.174-3.24c1.257-0.659,2.271-0.18,2.803,1.2c0.918,2.46,0.193,5.58,0.821,10.02
		c0.097,0.78,0.387,1.5,0.773,2.101c1.063,1.739,3.431-1.021,4.591-3.42c0.628-1.261,1.208-2.58,1.836-3.84
		c0.097-0.24,0.193-0.42,0.338-0.601c0-0.06,0.097-0.06,0.145-0.06c0.048,0.12,0.145,0.18,0.097,0.3c0,0.24-0.048,0.54-0.145,0.84
		c-0.87,2.521-2.03,4.8-3.576,6.72c-1.981,2.34-5.267,2.22-6.668-1.08c-0.918-2.16-1.16-7.199-0.677-10.499
		c0.048-0.12-0.048-0.3-0.048-0.48c-0.531,0-0.725,0.54-1.015,0.96c-2.126,3.54-2.948,9.6-4.542,13.199
		c-0.58,1.2-1.643,1.44-2.465,0.54C177.372,45.78,177.903,38.101,179.257,34.141z"
                    />
                    <path
                        className="pass"
                        d="M199.894,32.641c2.513-5.099,8.215-7.319,8.65-2.159c0.097,1.14,0,2.279-0.58,3.239c-0.29-0.359-0.097-0.72,0-1.02
		c0.145-0.78,0.048-1.56-0.146-2.28c-0.289-1.14-1.353-2.28-2.367-1.32c-4.204,3.18-7.491,21.299-2.465,20.16
		c3.527-0.78,6.62-6.3,9.085-11.22c0.338-0.78,0.725-0.36,0.241,0.6c-2.513,4.86-5.219,9.78-8.988,11.1
		C196.511,52.141,195.931,40.801,199.894,32.641z"
                    />
                </g>
            </g>
        </svg>
    )
}
