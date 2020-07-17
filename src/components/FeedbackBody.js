import React, { Component } from 'react'
import style from './appStyle.module.css'

export class FeedbackBody extends Component {
    render() {
        return (
            <div class="">
                <div class="col-7">
                    <span class={style.feedbackdata}>
                    Whether it is about our products or our app or you just have some ideas, we would love to hear your feedback and suggestions.
                    </span>

                   
                        <select class={style.feedbackselect} style={{width:"100%",padding:"13px 13px ",marginTop:"20px",lineHeight:"normal",verticalAlign:"middle",fontFamily:"montserrat-reg",borderRadius:"2px"}}>
                            <option>Select a category</option>
                            <option>Query/Issue</option>
                            <option>Product & Quality</option>
                            <option>Designs</option>
                            <option>Customization problem</option>
                            <option>App & Website</option>
                            <option>General</option>

                        </select>

                        <textarea placeholder="Share your feedback here" class={style.feedbacktextarea}></textarea>
                        <button type="submit" class={style.feedbacksubmit}>Submit Feedback</button>
                   
                </div>
            </div>
        )
    }
}

export default FeedbackBody
