export default function TimeLineItem({ text, reverse }) {
    return (<div className={`timeline-item ${reverse && "item-text-reverse"}`} >
        <div className='timeline-item-text' dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className='timeline-item-image'></div>
        <div className='timeline-item-text hide'></div>
    </div>)
}
