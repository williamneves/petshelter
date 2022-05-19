import React from 'react'
import {
	MDBIcon,
	MDBSwitch,
} from 'mdb-react-ui-kit';

const SwitchTheme = ({themeColor,handleChangeThemeColor}) => {
  return (
    <div className='d-flex align-items-center'>
							<MDBIcon
                fas={themeColor === 'light-skin'}
                far={themeColor != 'light-skin'}
								size={`${themeColor === 'light-skin' ? 'lg' : 'md'}`}
								icon='sun'
								className={`me-2 ${themeColor === 'light-skin' ? 'text-primary' : ''}`}
							/>
							<MDBSwitch
								checked={themeColor === 'dark-skin'}
								id='flexSwitchCheckDefault'
								label=''
								onChange={handleChangeThemeColor}
							/>
							<MDBIcon
								fas={themeColor != 'light-skin'}
                far={ themeColor === 'light-skin' }
                size={`${themeColor != 'light-skin' ? 'lg' : 'md'}`}
								icon='moon'
								className={`ms-1 ${themeColor === 'light-skin' ? '' : 'text-primary'}`}
							/>
						</div>
  )
}

export default SwitchTheme