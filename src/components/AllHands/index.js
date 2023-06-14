import hands from '../../hands.json';

export default function AllHands() {
    return (
        <div class='table'>
            <h2>List of Hands</h2>
            <table>
                <tr>
                    <th>Jyutping</th>
                    <th>Translation</th>
                    <th>Element</th>
                </tr>
                {hands.map(hand =>
                    <tr key={hand.id}>
                        <td>{hand.jyutping}</td>
                        <td>{hand.translation}</td>
                        <td>{hand.element}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}
