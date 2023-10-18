import Link from 'next/link'
import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <Link href='/' aria-label='Página inicial'>
      <svg
        width='340'
        height='145'
        viewBox='0 0 340 145'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.logo}
      >
        <path
          d='M35.6174 102.96C35.0094 101.84 34.1294 100.992 32.9774 100.416C31.8574 99.808 30.5294 99.504 28.9934 99.504C26.3374 99.504 24.2094 100.384 22.6094 102.144C21.0094 103.872 20.2094 106.192 20.2094 109.104C20.2094 112.208 21.0414 114.64 22.7054 116.4C24.4014 118.128 26.7214 118.992 29.6654 118.992C31.6814 118.992 33.3774 118.48 34.7534 117.456C36.1614 116.432 37.1854 114.96 37.8254 113.04H27.4094V106.992H45.2654V114.624C44.6574 116.672 43.6174 118.576 42.1454 120.336C40.7054 122.096 38.8654 123.52 36.6254 124.608C34.3854 125.696 31.8574 126.24 29.0414 126.24C25.7134 126.24 22.7374 125.52 20.1134 124.08C17.5214 122.608 15.4894 120.576 14.0174 117.984C12.5774 115.392 11.8574 112.432 11.8574 109.104C11.8574 105.776 12.5774 102.816 14.0174 100.224C15.4894 97.6 17.5214 95.568 20.1134 94.128C22.7054 92.656 25.6654 91.92 28.9934 91.92C33.0254 91.92 36.4174 92.896 39.1694 94.848C41.9534 96.8 43.7934 99.504 44.6894 102.96H35.6174ZM58.0199 103.68C58.9799 102.208 60.1799 101.056 61.6199 100.224C63.0599 99.36 64.6599 98.928 66.4199 98.928V107.616H64.1639C62.1159 107.616 60.5799 108.064 59.5559 108.96C58.5319 109.824 58.0199 111.36 58.0199 113.568V126H49.8119V99.216H58.0199V103.68ZM95.5912 112.176C95.5912 112.944 95.5432 113.744 95.4472 114.576H76.8712C76.9992 116.24 77.5272 117.52 78.4552 118.416C79.4152 119.28 80.5832 119.712 81.9592 119.712C84.0072 119.712 85.4312 118.848 86.2312 117.12H94.9672C94.5192 118.88 93.7032 120.464 92.5192 121.872C91.3672 123.28 89.9112 124.384 88.1512 125.184C86.3912 125.984 84.4232 126.384 82.2472 126.384C79.6232 126.384 77.2872 125.824 75.2392 124.704C73.1912 123.584 71.5912 121.984 70.4392 119.904C69.2872 117.824 68.7112 115.392 68.7112 112.608C68.7112 109.824 69.2712 107.392 70.3912 105.312C71.5432 103.232 73.1432 101.632 75.1912 100.512C77.2392 99.392 79.5912 98.832 82.2472 98.832C84.8392 98.832 87.1432 99.376 89.1592 100.464C91.1752 101.552 92.7432 103.104 93.8632 105.12C95.0152 107.136 95.5912 109.488 95.5912 112.176ZM87.1912 110.016C87.1912 108.608 86.7112 107.488 85.7512 106.656C84.7912 105.824 83.5912 105.408 82.1512 105.408C80.7752 105.408 79.6072 105.808 78.6472 106.608C77.7192 107.408 77.1432 108.544 76.9192 110.016H87.1912ZM125.169 112.176C125.169 112.944 125.121 113.744 125.025 114.576H106.449C106.577 116.24 107.105 117.52 108.033 118.416C108.993 119.28 110.161 119.712 111.537 119.712C113.585 119.712 115.009 118.848 115.809 117.12H124.545C124.097 118.88 123.281 120.464 122.097 121.872C120.945 123.28 119.489 124.384 117.729 125.184C115.969 125.984 114.001 126.384 111.825 126.384C109.201 126.384 106.865 125.824 104.817 124.704C102.769 123.584 101.169 121.984 100.017 119.904C98.8653 117.824 98.2893 115.392 98.2893 112.608C98.2893 109.824 98.8493 107.392 99.9693 105.312C101.121 103.232 102.721 101.632 104.769 100.512C106.817 99.392 109.169 98.832 111.825 98.832C114.417 98.832 116.721 99.376 118.737 100.464C120.753 101.552 122.321 103.104 123.441 105.12C124.593 107.136 125.169 109.488 125.169 112.176ZM116.769 110.016C116.769 108.608 116.289 107.488 115.329 106.656C114.369 105.824 113.169 105.408 111.729 105.408C110.353 105.408 109.185 105.808 108.225 106.608C107.297 107.408 106.721 108.544 106.497 110.016H116.769ZM145.819 98.928C148.955 98.928 151.451 99.952 153.307 102C155.195 104.016 156.139 106.8 156.139 110.352V126H147.979V111.456C147.979 109.664 147.515 108.272 146.587 107.28C145.659 106.288 144.411 105.792 142.843 105.792C141.275 105.792 140.027 106.288 139.099 107.28C138.171 108.272 137.707 109.664 137.707 111.456V126H129.499V99.216H137.707V102.768C138.539 101.584 139.659 100.656 141.067 99.984C142.475 99.28 144.059 98.928 145.819 98.928ZM201.199 92.304V126H192.991V112.128H180.223V126H172.015V92.304H180.223V105.504H192.991V92.304H201.199ZM205.492 112.56C205.492 109.808 206.004 107.392 207.028 105.312C208.084 103.232 209.508 101.632 211.3 100.512C213.092 99.392 215.092 98.832 217.3 98.832C219.188 98.832 220.836 99.216 222.244 99.984C223.684 100.752 224.788 101.76 225.556 103.008V99.216H233.764V126H225.556V122.208C224.756 123.456 223.636 124.464 222.196 125.232C220.788 126 219.14 126.384 217.252 126.384C215.076 126.384 213.092 125.824 211.3 124.704C209.508 123.552 208.084 121.936 207.028 119.856C206.004 117.744 205.492 115.312 205.492 112.56ZM225.556 112.608C225.556 110.56 224.98 108.944 223.828 107.76C222.708 106.576 221.332 105.984 219.7 105.984C218.068 105.984 216.676 106.576 215.524 107.76C214.404 108.912 213.844 110.512 213.844 112.56C213.844 114.608 214.404 116.24 215.524 117.456C216.676 118.64 218.068 119.232 219.7 119.232C221.332 119.232 222.708 118.64 223.828 117.456C224.98 116.272 225.556 114.656 225.556 112.608ZM247.911 103.008C248.679 101.76 249.783 100.752 251.223 99.984C252.663 99.216 254.311 98.832 256.167 98.832C258.375 98.832 260.375 99.392 262.167 100.512C263.959 101.632 265.367 103.232 266.391 105.312C267.447 107.392 267.975 109.808 267.975 112.56C267.975 115.312 267.447 117.744 266.391 119.856C265.367 121.936 263.959 123.552 262.167 124.704C260.375 125.824 258.375 126.384 256.167 126.384C254.279 126.384 252.631 126.016 251.223 125.28C249.815 124.512 248.711 123.504 247.911 122.256V126H239.703V90.48H247.911V103.008ZM259.623 112.56C259.623 110.512 259.047 108.912 257.895 107.76C256.775 106.576 255.383 105.984 253.719 105.984C252.087 105.984 250.695 106.576 249.543 107.76C248.423 108.944 247.863 110.56 247.863 112.608C247.863 114.656 248.423 116.272 249.543 117.456C250.695 118.64 252.087 119.232 253.719 119.232C255.351 119.232 256.743 118.64 257.895 117.456C259.047 116.24 259.623 114.608 259.623 112.56ZM276.409 96.432C274.969 96.432 273.785 96.016 272.857 95.184C271.961 94.32 271.513 93.264 271.513 92.016C271.513 90.736 271.961 89.68 272.857 88.848C273.785 87.984 274.969 87.552 276.409 87.552C277.817 87.552 278.969 87.984 279.865 88.848C280.793 89.68 281.257 90.736 281.257 92.016C281.257 93.264 280.793 94.32 279.865 95.184C278.969 96.016 277.817 96.432 276.409 96.432ZM280.489 99.216V126H272.281V99.216H280.489ZM301.365 119.04V126H297.189C294.213 126 291.893 125.28 290.229 123.84C288.565 122.368 287.733 119.984 287.733 116.688V106.032H284.469V99.216H287.733V92.688H295.941V99.216H301.317V106.032H295.941V116.784C295.941 117.584 296.133 118.16 296.517 118.512C296.901 118.864 297.541 119.04 298.437 119.04H301.365ZM316.833 126.384C314.497 126.384 312.417 125.984 310.593 125.184C308.769 124.384 307.329 123.296 306.273 121.92C305.217 120.512 304.625 118.944 304.497 117.216H312.609C312.705 118.144 313.137 118.896 313.905 119.472C314.673 120.048 315.617 120.336 316.737 120.336C317.761 120.336 318.545 120.144 319.089 119.76C319.665 119.344 319.953 118.816 319.953 118.176C319.953 117.408 319.553 116.848 318.753 116.496C317.953 116.112 316.657 115.696 314.865 115.248C312.945 114.8 311.345 114.336 310.065 113.856C308.785 113.344 307.681 112.56 306.753 111.504C305.825 110.416 305.361 108.96 305.361 107.136C305.361 105.6 305.777 104.208 306.609 102.96C307.473 101.68 308.721 100.672 310.353 99.936C312.017 99.2 313.985 98.832 316.257 98.832C319.617 98.832 322.257 99.664 324.177 101.328C326.129 102.992 327.249 105.2 327.537 107.952H319.953C319.825 107.024 319.409 106.288 318.705 105.744C318.033 105.2 317.137 104.928 316.017 104.928C315.057 104.928 314.321 105.12 313.809 105.504C313.297 105.856 313.041 106.352 313.041 106.992C313.041 107.76 313.441 108.336 314.241 108.72C315.073 109.104 316.353 109.488 318.081 109.872C320.065 110.384 321.681 110.896 322.929 111.408C324.177 111.888 325.265 112.688 326.193 113.808C327.153 114.896 327.649 116.368 327.681 118.224C327.681 119.792 327.233 121.2 326.337 122.448C325.473 123.664 324.209 124.624 322.545 125.328C320.913 126.032 319.009 126.384 316.833 126.384Z'
          fill='#398278'
        />
        <path
          d='M128.723 15.7461C128.7 15.3638 128.538 15.0031 128.268 14.7323C127.997 14.4616 127.636 14.2997 127.254 14.2773C98.1015 12.5625 74.8202 21.2461 64.9686 37.5C58.2343 48.6563 58.5858 61.8633 65.9686 74.8203L57.5194 83.2695C57.2262 83.5627 57.0615 83.9604 57.0615 84.375C57.0615 84.7896 57.2262 85.1873 57.5194 85.4805C57.8126 85.7737 58.2103 85.9384 58.6249 85.9384C59.0395 85.9384 59.4372 85.7737 59.7304 85.4805L68.1796 77.0273C74.9725 80.8984 81.8515 82.8438 88.4257 82.8438C94.4526 82.8492 100.363 81.1833 105.5 78.0312C121.754 68.1797 130.437 44.8945 128.723 15.7461ZM103.867 75.3594C93.9569 81.3633 82.164 81.1211 70.4765 74.7305L106.609 38.6016C106.902 38.3084 107.067 37.9107 107.067 37.4961C107.067 37.0815 106.902 36.6838 106.609 36.3906C106.316 36.0974 105.918 35.9327 105.504 35.9327C105.089 35.9327 104.692 36.0974 104.398 36.3906L68.2694 72.5234C61.8788 60.8359 61.6288 49.043 67.6405 39.1328C76.7265 24.1289 98.3593 16.0156 125.68 17.3203C126.984 44.6406 118.871 66.2734 103.867 75.3594Z'
          fill='#6BBD99'
        />
      </svg>
    </Link>
  )
}
