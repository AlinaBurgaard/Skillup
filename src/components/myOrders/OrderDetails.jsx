// Write all the code here

//create react components

const OrderDetails = () => {
    return (
        <div>
            <h1>Status</h1>
            <ul>
                <li>Placed at: 14/02/2023</li>
                <li>Delivered at: 15/02/2023</li>
            </ul>

            <h1>Payment</h1>
            <ul>
                <li>Payment Method: Visa</li>
                <li>Reference: #123</li>
                <li>Paid at: 14/02/2023</li>
            </ul>
        </div>
    )
}

export default OrderDetails;