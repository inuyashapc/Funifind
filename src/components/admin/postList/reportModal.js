import reportService from '@/services/report.service';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReportModal = ({ show, onHide, title, post }) => {
	const [report, setReport] = useState("");

	// Report post
	const reportPost = () => {
		// Params để report 1 bài post là postId và comment
		const params = {
			postId: post._id,
			description: report
		}

		reportService.reportPost(params)
			.then(res => {
				alert('report successfully');
			})
			.catch(err => {
				alert('Have error');
			})
	}
	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Write the reason why you report...'
						className='form-control'
						value={report}
						onChange={e => setReport(e.target.value)}
					/>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='primary' onClick={() => reportPost()}>
					Report
				</Button>
				<Button variant="secondary" onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ReportModal;
