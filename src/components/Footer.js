import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container,List,Segment} from 'semantic-ui-react'

class Footer extends Component{

    render(){
        return(
            <div>
                <Segment inverted style={{ margin: '2em 0em 0em', padding: '2em 0em' }} vertical>
                    <Container textAlign='center' >
                        <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            İletişim
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Şartlar ve koşullar
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Gizlilik
                        </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}
export default Footer;