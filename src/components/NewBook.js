import React from 'react';
import '../App.css';
import { Button, Form } from 'semantic-ui-react';


class NewBook extends React.Component{

    render(){

        return(
            <div>
                <Form className="fromNewBook">
                    <Form.Field>
                        <label>Kitap No</label>
                        <input type="number" placeholder='Kitap No' />
                    </Form.Field>
                    <Form.Field>
                        <label>Kitap Adı</label>
                        <input placeholder='Kitap Adı' />
                    </Form.Field>
                    <Form.Field>
                        <label>Yazar</label>
                        <input placeholder='Yazar' />
                    </Form.Field>
                    <Form.Field>
                        <label>Yayınevi</label>
                        <input placeholder='Yayınevi'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Resim Url</label>
                        <input placeholder='Kitap Resim Url Giriniz'/>
                        <image ></image>
                    </Form.Field>
                    <Button type='submit' primary>Kaydet</Button>
                </Form>

            </div>
        )
    }
}
export default NewBook;