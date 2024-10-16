import { env } from '$env/dynamic/private';
import nodemailer from 'nodemailer';

export const POST = async ({ request }) => {
	console.log('GETTING REQUEST');
	try {
		const { text } = await request.json();

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'yohannmartinez34@gmail.com',
				pass: env.YAHOO_PASSWORD
			}
		});

		const mailOptions = {
			from: '"Barman Cubain" <barmancubain@yahoo.fr>',
			to: 'renelier.martinez@yahoo.fr',
			subject: 'Reservation depuis le site 💥',
			html: text
		};

		await transporter.sendMail(mailOptions);

		return new Response(JSON.stringify({ success: true, message: 'E-mail envoyé avec succès' }), {
			status: 200
		});
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ success: false, message: "Erreur lors de l'envoi de l'e-mail" }),
			{
				status: 500
			}
		);
	}
};
