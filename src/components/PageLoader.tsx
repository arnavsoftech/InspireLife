function PageLoader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1, minHeight: 300, background: '#fff' }}>
            <img src={'/img/loader.svg'} alt='Loader' width={200} height={100} />
        </div>
    )
}

export default PageLoader