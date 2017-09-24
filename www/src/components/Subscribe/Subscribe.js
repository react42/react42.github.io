import React, { Component } from 'react'
import { Field, Label, Control, Input, Button } from 'bloomer'

import './Subscribe.css'

const {
  REACT_APP_MAILCHIMP_API_KEY,
  REACT_APP_MAILCHIMP_USER,
  REACT_APP_MAILCHIMP_DC,
  REACT_APP_MAILCHIMP_LIST_ID,
} = process.env

const action = `//${REACT_APP_MAILCHIMP_USER}.${REACT_APP_MAILCHIMP_DC}.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_API_KEY}&id=${REACT_APP_MAILCHIMP_LIST_ID}`

class Subscribe extends Component {
  state = { email: '' }

  _updateEmailValue = email => this.setState({ email })

  render () {
    const { email } = this.state

    return (
      <form
        className="subscribe"
        action={action}
        method="POST"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
			  <Field>
			    <Label>Newsletter</Label>
			    <Control>
		        <Input
							onChange={({ target: { value } }) => this._updateEmailValue(value)}
		          value={email}
		          type="email"
		          name="EMAIL"
		          placeholder="Enter your email address"
		          required
						/>
			    </Control>
				</Field>
				<Button
					isColor="dark"
					type="submit"
          id="mc-embedded-subscribe"
				>
					Subscribe
				</Button>
      </form>
    )
  }
}

export default Subscribe
