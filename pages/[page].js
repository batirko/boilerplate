/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
// import getData from '../utils/getData'
import Head from 'next/head'
import styled from 'styled-components'
import { devices } from '../components/Global'

let Container = styled.div`

`


const Product = ({ data }) => {
    const router = useRouter()
    const { page } = router.query

    return (
        <Container>
            <Head>
                <title>Website page</title>
                <meta name="description" content="This is a website for the internet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>{page}</p>
        </Container>
    )
}

export default Product;

// export async function getStaticProps(context) {


//     let data = await getData(context.params.product);
//     data = data.page

//     return {
//         props: {
//             data,
//         }, 
//          revalidate: 1
//     };
// }

// export async function getStaticPaths(context) {

//     let data = await getData();


//     const pages = [];
//     data.allPages.map(page => {
//         return pages.push({ params: { product: page } })
//     })
//     return {
//         paths: pages,
//         fallback: false
//     };
// }