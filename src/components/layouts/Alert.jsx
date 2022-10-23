import React from 'react'
import { GetAlertContext } from '../../context/alertContext';

function Alert() {
    const { alert } = GetAlertContext();
  return alert !== null && (
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert &&alert.msg}</strong>
        </p>
   )
}

export default Alert