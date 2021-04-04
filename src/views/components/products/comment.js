import React from 'react';

const Commenting = () => {
    return (
        <div id="review_form_wrapper">
            <div id="review_form">
                <div id="respond" className="comment-respond">
                    <span id="reply-title" className="comment-reply-title">
                        Be the first to review “Beanie with Logo”
                    <small><a rel="nofollow" id="cancel-comment-reply-link" href="#respond" style={{ display: 'none' }}>Cancel reply</a></small>
                    </span>
                    <form action="#a" method="post" id="commentform" className="comment-form" noValidate>
                        <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                        <div className="comment-form-rating">
                            <label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label>
                            <p className="stars">
                                <span> <a className="star-1" href="#a">1</a> <a className="star-2" href="#a">2</a> <a className="star-3" href="#a">3</a> <a className="star-4" href="#a">4</a> <a className="star-5" href="#a">5</a> </span>
                            </p>
                            <select name="rating" id="rating" required style={{ display: 'none' }}>
                                <option value>Rate…</option>
                                <option value={5}>Perfect</option>
                                <option value={4}>Good</option>
                                <option value={3}>Average</option>
                                <option value={2}>Not that bad</option>
                                <option value={1}>Very poor</option>
                            </select>
                        </div>
                        <p className="comment-form-comment">
                            <label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} />
                        </p>
                        <p className="comment-form-author">
                            <label htmlFor="author">Name&nbsp;<span className="required">*</span></label><input id="author" name="author" type="text" defaultValue size={30} required />
                        </p>
                        <p className="comment-form-email">
                            <label htmlFor="email">Email&nbsp;<span className="required">*</span></label><input id="email" name="email" type="email" defaultValue size={30} required />
                        </p>
                        <p className="comment-form-cookies-consent">
                            <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                            <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                        </p>
                        <p className="form-submit">
                            <input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" /> <input type="hidden" name="comment_post_ID" defaultValue={26} id="comment_post_ID" />
                            <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Commenting