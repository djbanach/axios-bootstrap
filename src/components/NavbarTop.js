import React from 'react';
import { Container, Navbar, FormControl, Form } from 'react-bootstrap';

const NavbarTop = props => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">{props.label}</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.onChange} />
                    {/* <Button variant="outline-info">Search</Button> */}
                </Form>
            </Navbar>
        </Container>
    )
}

export default NavbarTop;