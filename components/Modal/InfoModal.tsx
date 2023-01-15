import TextBlock from "../Modules/TextBlock";

const InfoModal = () => {
    return (
        <div className='l-template align-c modal-info-box padding-20-10-40-10' data-testid='infoModal'>
            <TextBlock
                text={<>Ви повинні вгадати приховане слово за <mark>6 спроб</mark>, і колір букв зміниться, щоб
                    показати, наскільки ви близькі.</>}
                className='text-center'/>
            <TextBlock
                text={<>Щоб почати гру, просто введіть будь-яке слово, наприклад:</>}
                className='text-center'/>
            <div className='flex-center modal-field-row text-center'>
                <div className='flex-center modal-field-item is-wrong'>з</div>
                <div className='flex-center modal-field-item is-right'>е</div>
                <div className='flex-center modal-field-item is-wrong'>м</div>
                <div className='flex-center modal-field-item is-semiright'>л</div>
                <div className='flex-center modal-field-item is-wrong'>я</div>
            </div>
            <div className='flex align-c'>
                <div className='flex-center modal-field-item
                 modal-field-item-small is-right'>е</div>
                <TextBlock text={<>є в слові і стоїть<br/>на правильній позиціЇ</>}
                           className='padding-l-10'/>
            </div>
            <div className='flex align-c'>
                <div className='flex-center modal-field-item
                 modal-field-item-small is-semiright'>л</div>
                <TextBlock text={<>є в слові, але стоїть<br/>не на своїй позиціі</>}
                           className='padding-l-10'/>
            </div>
            <div className='flex align-c'>
                <div className='flex-center modal-field-item
                 modal-field-item-small is-wrong'>з</div>
                <div className='flex-center modal-field-item
                 modal-field-item-small is-wrong margin-rl-3'>м</div>
                <div className='flex-center modal-field-item
                 modal-field-item-small is-wrong'>я</div>
                <TextBlock text={<>немає в слові</>}
                           className='padding-l-10'/>
            </div>
            <div className='flex-center modal-field-row text-center'>
                <div className='flex-center modal-field-item is-right'>л</div>
                <div className='flex-center modal-field-item is-right'>е</div>
                <div className='flex-center modal-field-item is-wrong'>н</div>
                <div className='flex-center modal-field-item is-wrong'>ч</div>
                <div className='flex-center modal-field-item is-wrong'>а</div>
            </div>
            <TextBlock text='майже' className='text-center'/>
            <div className='flex-center modal-field-row text-center'>
                <div className='flex-center modal-field-item is-right'>л</div>
                <div className='flex-center modal-field-item is-right'>е</div>
                <div className='flex-center modal-field-item is-right'>м</div>
                <div className='flex-center modal-field-item is-right'>і</div>
                <div className='flex-center modal-field-item is-right'>ш</div>
            </div>
            <TextBlock text='перемога !' className='text-center'/>
            <TextBlock text='Слова оновлюються щоденно' className='text-center'/>
        </div>
    )
}
export default InfoModal