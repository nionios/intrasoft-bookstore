/**
 * SVG logo of kariera.gr
 * @constructor
 * @returns SVG Logo of kariera.gr (Letter "k" on mobile, full word logo on desktop: "kariara.gr")
 */
export default function KarieraLogo(props: { isMobile: boolean }) {
    let logo;
    if (props.isMobile) {
        logo = <svg width="21"
                    height="25"
                    viewBox="0 0 21 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3805_734)">
                <path d="M15.5682 21.8152C15.5682 21.0387 15.8288 20.3906 16.35 19.8712C16.5981 19.6189 16.8951 19.4198 17.2229 19.2863C17.5508 19.1527 17.9024 19.0874 18.2564 19.0943C18.6127 19.0884 18.9665 19.1541 19.2968 19.2875C19.6271 19.421 19.9272 19.6195 20.1791 19.8712C20.71 20.3885 20.9754 21.0365 20.9754 21.8152C20.9828 22.1711 20.9157 22.5247 20.7786 22.8532C20.6415 23.1818 20.4373 23.4783 20.1791 23.7236C19.927 23.9751 19.6269 24.1733 19.2966 24.3066C18.9664 24.4399 18.6126 24.5056 18.2564 24.4996C17.9025 24.5032 17.5514 24.4362 17.2237 24.3026C16.896 24.1689 16.5982 23.9714 16.3479 23.7214C16.0976 23.4714 15.8997 23.1741 15.7658 22.8468C15.6319 22.5195 15.5648 22.1688 15.5682 21.8152Z"
                      fill="#FF2458"/>
                <path d="M15.1584 24.5H10.406L4.17881 15.8584L4.1822 24.5H0V0.5H4.1822L4.17881 15.5307L9.75055 8.11775H14.7487L9.01311 15.8174L15.1584 24.5Z"
                      fill="#1C2964"/>
            </g>
            <defs>
                <clipPath id="clip0_3805_734">
                    <rect width="20.976"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    } else {
        logo = <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 238 53"
                    className="NavBar_logoDesktop__fSl7x"
                    data-testid="desktop-logo">
            <g clipPath="url(#logo_svg__a)">
                <path fill="#1C2964"
                      d="M27.283 43.185h-8.61L7.549 27.71v15.486H0V0h7.548v27.146L17.5 13.74h8.945L16.052 27.597l11.231 15.588ZM54.813 25.902v17.283H47.77v-3.39c-2.195 2.26-5.054 3.39-8.576 3.39-2.954 0-5.311-.772-7.072-2.316-1.762-1.544-2.642-3.558-2.642-6.042 0-2.523.956-4.509 2.869-5.958 1.913-1.45 4.497-2.177 7.754-2.181h7.044v-1.244c0-1.58-.446-2.794-1.336-3.642-.891-.848-2.19-1.27-3.898-1.27a7.994 7.994 0 0 0-3.802.91c-1.136.602-2.348 1.58-3.636 2.936l-3.973-4.687c3.256-3.84 7.347-5.76 12.27-5.76 3.712 0 6.647 1.044 8.805 3.134 2.158 2.09 3.237 5.035 3.237 8.837Zm-7.667 6.16v-.338h-6.022c-2.613 0-3.92.94-3.92 2.822a2.633 2.633 0 0 0 1.11 2.231c.738.545 1.714.818 2.925.818 1.705 0 3.115-.518 4.23-1.553 1.117-1.035 1.675-2.362 1.677-3.98ZM169.792 25.902v17.283h-7.044v-3.39c-2.195 2.26-5.054 3.39-8.577 3.39-2.953 0-5.31-.772-7.071-2.316-1.762-1.544-2.642-3.558-2.642-6.042 0-2.523.956-4.509 2.869-5.958 1.913-1.45 4.497-2.177 7.754-2.181h7.044v-1.244c0-1.58-.446-2.794-1.336-3.642-.891-.848-2.19-1.27-3.898-1.27a7.994 7.994 0 0 0-3.802.91c-1.136.602-2.348 1.58-3.636 2.936l-3.973-4.687c3.257-3.84 7.347-5.76 12.271-5.76 3.711 0 6.646 1.044 8.804 3.134 2.158 2.09 3.237 5.035 3.237 8.837Zm-7.667 6.16v-.338h-6.022c-2.613 0-3.919.94-3.919 2.822a2.63 2.63 0 0 0 1.108 2.231c.739.545 1.715.818 2.926.818 1.705 0 3.115-.518 4.231-1.553 1.116-1.035 1.674-2.362 1.676-3.98ZM76.25 14.094v6.993h-2.077c-2.386 0-4.262.646-5.63 1.939-1.367 1.292-2.05 3.173-2.048 5.642v14.517H58.7V13.741h7.145v3.821c2.008-2.548 4.63-3.821 7.867-3.821a8.271 8.271 0 0 1 2.538.353ZM140.56 14.094v6.993h-2.076c-2.387 0-4.263.646-5.63 1.939-1.367 1.292-2.05 3.173-2.049 5.642v14.517h-7.795V13.741h7.146v3.821c2.008-2.548 4.63-3.821 7.866-3.821a8.274 8.274 0 0 1 2.538.353ZM238 14.094v6.993h-2.077c-2.386 0-4.262.646-5.629 1.939-1.367 1.292-2.05 3.173-2.049 5.642v14.517h-7.795V13.741h7.146v3.821c2.008-2.548 4.63-3.821 7.866-3.821a8.274 8.274 0 0 1 2.538.353ZM79.173 4.938a4.798 4.798 0 0 1 1.41-3.527A4.656 4.656 0 0 1 84.015 0a4.751 4.751 0 0 1 3.464 1.411 4.755 4.755 0 0 1 1.436 3.527 4.68 4.68 0 0 1-1.436 3.466 4.76 4.76 0 0 1-3.464 1.41 4.647 4.647 0 0 1-3.434-1.41 4.72 4.72 0 0 1-1.407-3.466Z"></path>
                <path fill="#FF2458"
                      d="M173.69 38.306a4.854 4.854 0 0 1 1.385-3.5 4.772 4.772 0 0 1 3.459-1.436 4.774 4.774 0 0 1 3.464 1.411 4.736 4.736 0 0 1 1.436 3.525 4.66 4.66 0 0 1-1.436 3.468 4.774 4.774 0 0 1-3.464 1.411 4.791 4.791 0 0 1-3.439-1.415 4.833 4.833 0 0 1-1.405-3.464Z"></path>
                <path fill="#1C2964"
                      d="M87.943 13.74h-7.796v29.445h7.796V13.741ZM118.625 31.021H99.389c.443 1.78 1.339 3.153 2.689 4.12 1.35.967 3.022 1.45 5.017 1.449 2.698 0 5.249-.946 7.652-2.836l3.105 5.235c-3.292 2.797-6.953 4.196-10.982 4.196-4.214.074-7.79-1.338-10.73-4.236-2.938-2.898-4.37-6.393-4.295-10.486-.077-4.056 1.309-7.54 4.157-10.456 2.848-2.916 6.249-4.338 10.203-4.266 3.771 0 6.866 1.25 9.287 3.751 2.421 2.501 3.631 5.608 3.631 9.32a18.702 18.702 0 0 1-.498 4.21Zm-19.236-5.4h12.472c-.039-1.706-.622-3.08-1.748-4.12-1.125-1.041-2.521-1.563-4.185-1.564a6.16 6.16 0 0 0-4.16 1.527c-1.182 1.03-1.975 2.415-2.38 4.157ZM209.703 13.74h6.953v25.366c0 4.463-1.289 7.895-3.869 10.295-2.58 2.4-6.075 3.6-10.485 3.599-5.196 0-9.738-1.725-13.624-5.176l3.98-5.293c3.216 2.399 6.225 3.6 9.027 3.6 2.281 0 4.086-.562 5.414-1.687 1.328-1.126 1.991-2.757 1.99-4.893v-1.526c-2.021 2.213-4.844 3.32-8.467 3.32-3.85 0-7.026-1.294-9.527-3.88-2.502-2.588-3.754-5.907-3.757-9.958 0-4.087 1.252-7.405 3.757-9.954 2.504-2.549 5.68-3.824 9.527-3.826 4.042 0 7.074 1.37 9.094 4.107l-.013-4.093Zm-.504 13.667c0-2.285-.663-4.057-1.99-5.313-1.327-1.256-3-1.884-5.019-1.884-2.093 0-3.813.654-5.158 1.963-1.345 1.308-2.018 3.07-2.018 5.287 0 2.213.682 4.013 2.046 5.4 1.364 1.387 3.074 2.08 5.13 2.08a6.75 6.75 0 0 0 2.697-.495 6.793 6.793 0 0 0 2.283-1.528c1.353-1.347 2.029-3.183 2.029-5.51Z"></path>
            </g>
            <defs>
                <clipPath id="logo_svg__a">
                    <path fill="#fff"
                          d="M0 0h238v53H0z"></path>
                </clipPath>
            </defs>
        </svg>
    }

    return logo;
}
