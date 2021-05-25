import React , {useState} from 'react'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Payment() {
    const [name, setName] = useState('Shaktish')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Check your connection!')
			return
		}

		const data = await fetch('http://localhost:5000/api/razorpay', { method: 'POST' }).then((res) =>
			res.json()
		)

		const options = {
			key: __DEV__ ? 'rzp_test_IgoMvROIJDmwUw' : process.env.PRODUCTION_KEY,
			currency: data.currency,  // INR
			amount: data.amount,  // smallest currency Bharat: paisa, US: penny
			order_id: data.id,
			name: 'Donation', // order name
			description: 'Thank you for placing your order with us.',
			// image: 'http://localhost:5000/logo.svg',  // LOGO link appear in razorpay portal
			// handler: function (response) {
			// 	alert(response.razorpay_payment_id)
			// 	alert(response.razorpay_order_id)
			// 	alert(response.razorpay_signature)
			// },
			prefill: { // detail fill in razorpay
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
        <button
            className="App-link"
            onClick={displayRazorpay}
            target="_blank"
            rel="noopener noreferrer"
        >
            Donate $5
        </button>
	)

}

export default Payment
