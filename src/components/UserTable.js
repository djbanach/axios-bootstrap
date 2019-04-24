import React from 'react';
import { Table, Container } from 'react-bootstrap';

const UserTable = (props) => {
    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </thead>
                <tbody>
                    {props.items.map(item =>
                        <tr key={item.key}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default UserTable;
