
import React, { Component } from 'react';

export class Payment extends Component {
    render() {
        return (
            <div>
                <h1 className ="payment">Ready to Pay?
                    <i  className ="fa fa-credit-card-alt"> </i>
                </h1>

                    <table>
                        <tr>
                        <th>Items</th>

                        <th>Price</th>
                        </tr>
                        <tr>
                        <td>Double Double</td>
                        <td>$ 3.45</td>

                        </tr>
                        <tr>
                        <td>Fries</td>
                        <td>$ 1.60</td>

                        </tr>
                        <tr>
                        <td>Medium Drink</td>
                        <td>$ 1.65</td>

                        </tr>
                        <tr>
                        <td>Tax + Fee</td>

                        <td>$ 3.75</td>

                        </tr>
                        <tr>
                        <td>Total</td>
                        <td>$ 10.45</td>
                        </tr>

                    </table>
                    <br>
                        <button className ="ui button" type="submit">Pay Now!
                        </button>
                        <i className ="fa fa-cc-paypal"style="font-size:30px;color:dodgerblue;"></i>
                        <i className ="fa fa-cc-visa"style="font-size:30px;color:red;"></i>
                    <br/>
            </div>
            );
    }
}
