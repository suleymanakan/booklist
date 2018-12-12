import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container,Image,Menu,Visibility} from 'semantic-ui-react';

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }
  
  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

class Header extends Component{
    state = {
        menuFixed: false,
      
    }
    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: false })

    render(){
        const { menuFixed } = this.state
        return(
            <div>
                <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}>
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}>
                            <Container text>
                            <Menu.Item>
                            <Image size='mini' src='https://cdn.icon-icons.com/icons2/325/PNG/256/Letter-S-icon_34798.png' />
                            </Menu.Item>
                            <Menu.Item position='left' header>Sakan Kitap</Menu.Item>
                            <Menu.Item as='a'>Kitaplar</Menu.Item>
                            <Menu.Item as='a'>Kitap Ekle</Menu.Item>

                            <Menu.Item position='right'>
                        
                            </Menu.Item>
                            </Container>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}
export default Header;