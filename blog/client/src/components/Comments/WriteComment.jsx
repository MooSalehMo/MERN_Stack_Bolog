import './Styles.css'
import SendButton from '../Buttons/SendButton';
function WriteComment({handelSubmit}) {
    return(
        <div className="write-comment mb-5">
            <form onSubmit={handelSubmit} className="flex flex-row gap-4">
                <textarea className="textarea w-3/4 rounded-xl p-2" name='desc' placeholder="Write Your Comment here" />
                <div className='mt-5'>
                    <SendButton />
                </div>
            </form>
        </div>
    )
}

export default WriteComment;