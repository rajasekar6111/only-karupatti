

export function ImageWithName({ img, name }) {
    return (
        <div className='flex-column' style={{ alignItems: 'center', cursor: 'pointer' }}>
            <img src={img} width='40%' alt='' />
            <h5 style={{ margin: '0', marginTop: '7px', fontSize: '16px' }}>{name}</h5>
        </div>
    )
}

export function ProductsImg({ img, name, price, cprice, discount }) {
    const list = [1, 2, 3, 4]

    return (
        <>
            {list.map((model) =>
                <div className="flex-column" style={{ cursor: 'pointer' }}>

                    <img src={img} width='300px' alt='' />
                    <span style={{ marginLeft: '15px' }}>{name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                        <del style={{ color: '#888' }}>{cprice}</del>
                        <span style={{ marginLeft: '10px' }}>{discount}</span>
                        <h4 style={{ marginLeft: '10px' }}>{price}</h4>
                    </div>
                </div>
            )}
        </>
    )
}


export function KarupattiImg({ img, name, price, cprice }) {
    const list = [1, 2, 3]

    return (
        <>
            {list.map((model) =>
                <div className="flex-column" style={{ cursor: 'pointer' }}>

                    <img src={img} width='250px' alt='' />
                    <span style={{ marginLeft: '15%' }}>{name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15%' }}>
                        <del style={{ color: '#888' }}>{cprice}</del>
                        <h4>{price}</h4>
                    </div>
                </div>
            )}
        </>
    )
}

export function ImgProducts({ img, name, price, discount }) {
    const list = [1, 2, 3, 4];

    return (
        <>
            {list.map((model) => (
                <div className="flex-column" style={{ cursor: 'pointer' }} key={model}>

                    <img src={img} width='280px' alt='' />
                    <span style={{ marginLeft: '30px' }}>{name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                        <span style={{ marginLeft: '10px' }}>{discount}</span>
                        <h4 style={{ marginLeft: '10px' }}>{price}</h4>
                    </div>
                    <button onClick={() => alert(`Button clicked for ${name}`)}
                        style={{ height: '40px', width: '95%', borderRadius: '10px', marginLeft: '25px', border: '1px solid', cursor: 'pointer' }}
                    >
                        choose options</button>
                </div>
            ))}
        </>
    );
}

export function Images({ img }) {
    const list = [1, 2, 3, 4]

    return (
        <>
            {list.map((model) =>
                <div className="flex-column" style={{ cursor: 'pointer' }}>
                    <img src={img} width='250px' alt='' />
                </div>
            )}
        </>
    )
}