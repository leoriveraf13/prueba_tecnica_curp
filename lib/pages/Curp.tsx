import Layout from 'lib/components/Layout'
import CurpData from 'lib/components/pageComp/CurpData'
import React, { ReactElement, useEffect, useState } from 'react'

const Curp = () : ReactElement => {
    return (
        <div className='curp-body'>
            <Layout>
                <CurpData />
            </Layout>
        </div>
    )
}

export default Curp