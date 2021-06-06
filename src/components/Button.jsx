import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// const Button = (props) => <button className={styles['button']} {...props} />;

class Button extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { loading } = this.state;

    return (
      <button
        onClick={this.startLoading}
        className={cx('button', { loading })}
        {...this.props}
      />
    );
  }

  startLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
}

export default Button;
