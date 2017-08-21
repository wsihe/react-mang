import React from 'react';
import { Link, IndexLink } from 'react-router';
import { is, fromJS} from 'immutable';
import template from './template';
export {template}

export class Header extends React.Component {  //头部标题
    constructor(props,context) {
        super(props,context);
        this.state = {
            showHide :'none', // 显示右侧菜单，默认隐藏
        }

        this.showNav = () => { //显示右侧导航栏
            if (this.state.showHide == 'block') {
                this.setState({showHide:'none'})
            }else{
                this.setState({showHide:'block'})
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    
    render() {
        let {nav, saleRecord ,title ,HideList,goback ,save,productsInform,applyRecord,params} = this.props;
        let navState = this.state.showHide;
        let indexNavStyle = {}
        if (nav) {
            nav = (
                <div className='head_menu' onClick={this.showNav}>
                    <ul className='head_listname'  style={{display:navState}} >
                        <li>
                            <IndexLink to="/">
                                <span>销售录入</span>
                                <span className='head_arrow'></span>
                            </IndexLink>
                        </li>
                        <li>
                            <Link to='/allDeposit'>
                                <span>提现</span>
                                <span className='head_arrow'></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/helpCenter'>
                                <span>帮助中心</span>
                                <span className='head_arrow'></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
        
        if (goback&&params) {
            goback = ( <Link to={'/index'+params} className='head_goback left'>返回</Link>)
        }else if (goback){
            goback = (<span className='head_goback left' onClick={() => window.history.back()}>返回</span>)
        }

        if (title&&title == '销售录入') {
            indexNavStyle = {position:'absolute'}
        }

        return (
            <header className="head-list"   >
            </header>
        );
    }
}


