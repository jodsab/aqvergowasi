import React from 'react'
import './styles.scss'

function News() {
    return (
        <div id='novedades' className='novedades_container'>
            <h3>
                NOVEDADES
            </h3>
            <div className='secciones'>
                <div className='blog'>
                    <p className='p_blog'>
                        Blog
                    </p>
                </div>
                <div className='articulos'>
                    <p className='p_articulos'>
                        Artículos
                    </p>
                </div>
            </div>
        </div>
    )
}

export default News
