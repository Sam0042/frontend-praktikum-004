function Hello(props) {
    const name = 'Hisyam';
    const age = 19;
    const major = 'Teknik Informatika';

    /**dalam return JSX, diluar JS biasa */
    return (
        <div className='hello'>
            <h1>HALO REACT</h1>
            <p>Nama saya {props.name}, umur saya {props.age} tahun, dan jurusan saya adalah {props.major}</p>
        </div>
    );
}

export default Hello;