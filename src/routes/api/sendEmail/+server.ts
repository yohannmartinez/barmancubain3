import nodemailer from 'nodemailer';

export const POST = async ({ request }) => {
	console.log('GETTING REQUEST');
	try {
		const { text } = await request.json();

		const transporter = nodemailer.createTransport({
			service: 'yahoo',
			auth: {
				user: 'barmancubain@yahoo.fr',
				pass: 'nwbusawrcbvpqwdv'
			}
		});

		const mailOptions = {
			from: '"Barman Cubain" <barmancubain@yahoo.fr>',
			to: 'renelier.martinez@yahoo.fr',
			subject: 'Reservation depuis le site 💥',
			text
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
