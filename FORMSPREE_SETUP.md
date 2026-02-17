# Formspree reCAPTCHA Setup

## ✅ What's Done
Your site now sends reCAPTCHA tokens with every form submission.

## 🔐 One More Step: Add Secret Key to Formspree

To complete the setup, you need to tell Formspree to verify the captcha tokens:

### Steps:

1. **Log into Formspree**
   - Go to: https://formspree.io/
   - Sign in to your account

2. **Find Your Form**
   - Click on your form: `mpwvyzbr`
   - Go to the **Settings** tab

3. **Add reCAPTCHA**
   - Scroll to the **"Spam Protection"** section
   - Find **"Google reCAPTCHA"**
   - Paste your **Secret Key**: `6LdUym4sAAAAABLFJUAdTCeMCoGZZcB_6_qP7Baj`
   - Click **Save**

That's it! Now Formspree will verify every submission is from a real person.

---

## 🧪 How to Test

1. **Rebuild your site**:
   ```bash
   npm run build
   ```

2. **Visit your website**

3. **Submit a test form**:
   - Fill in your email and website
   - Click submit
   - You should see "Sending..." then "Thank you! We'll be in touch soon."

4. **Check Formspree**:
   - The submission should appear in your Formspree dashboard
   - It should be marked as verified by reCAPTCHA

---

## 🚨 Troubleshooting

**If form doesn't submit:**
- Clear your browser cache
- Make sure you rebuilt the site after adding the key
- Check browser console for errors (F12)

**If you still get spam:**
- Make sure you added the secret key to Formspree
- Check reCAPTCHA dashboard for blocked attempts

---

## 📊 Monitor Protection

**Formspree Dashboard**: https://formspree.io/forms/mpwvyzbr
- See all submissions
- Check which ones passed captcha

**reCAPTCHA Dashboard**: https://www.google.com/recaptcha/admin
- See how many bots were blocked
- View traffic patterns

---

**You're all set! Your forms are now protected.** 🎉
