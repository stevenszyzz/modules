import React from 'react'
import { useSelector } from 'react-redux';

import './modules.css'
import { ModulesListItem } from './ModulesListItem';

export const ModulesScreen = () => {

    const { modules } = useSelector(state => state.app);

    return (
        <div className='container '>
            <div className="row">
                <div className="modules-menu">
                    <h1 className='text-white text-center'>Modules</h1>

                    <div className="navegacion">
                        <ul>
                            {
                                modules.map( (module) => (
                                   <ModulesListItem 
                                       key={module.id_module}
                                       module={module}
                                   />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
