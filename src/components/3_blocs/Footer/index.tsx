import { useRouter } from 'next/router';

import s from './footer.module.scss';

import { Contact, FooterDetails } from '@c_types/T_footerData';

type Props = {
	details: FooterDetails;
	contact: Contact;
};

const defaultProps: Props = {
	details: { shotText: 'Teissier TP', location: 'Cavaillon (83)' },
	contact: { cellNumber: '', homeNumber: '', emailAdress: '' },
};

const Footer = (props: Props) => {
	const { details, contact } = props;
	const { shotText, location } = details;
	const { cellNumber, homeNumber, emailAdress } = contact;

	const router = useRouter();
	const isOnContactPage = router.pathname === '/contact' ? true : false;

	return (
		<div className={s['footer']}>
			{isOnContactPage && (
				<div className={s['full']}>
					<img src='/images/logo_blanc.png' alt='Logo Teissier TP' />
				</div>
			)}

			{!isOnContactPage && (
				<>
					<div className={s['left']}>
						<img src='/images/logo_blanc.png' alt='Logo Teissier TP' />
						<p className={``}>{shotText}</p>

						{!isOnContactPage && (
							<div className={s['location']}>
								<img src='/icons/location_white.png' alt='Icon location' />
								<p>{location}</p>
							</div>
						)}
					</div>

					<div className={s['right']}>
						<h3>{'Contactez-nous'}</h3>

						<div className={s['numbers']}>
							<img src='/icons/phone_white.png' alt='Icon phone' />
							<p className={s['text']}>{`${cellNumber} | ${homeNumber}`}</p>
						</div>

						<div className={s['email-adress']}>
							<img src='/icons/mail_white.png' alt='Icon email' />
							<p>{emailAdress}</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Footer;

Footer.defaultProps = defaultProps;
