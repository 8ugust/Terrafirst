import { GoRocket } from "react-icons/go";
import './Loading.css';

const Loading = ({isHide}) => {

	return(
		<div id="loading" className={ isHide ? 'load-wrap opac hide' : 'load-wrap'}>
			<div className="load-line">
				<GoRocket className="icon-rocket" />
			</div>
			<div className="load-text">- Loading -</div>
		</div>
	)
};

export default Loading;
